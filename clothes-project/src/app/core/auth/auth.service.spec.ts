import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { AuthResponseData } from './interfaces/interfaces';
import * as errorResponses from './authResponseErrors';

const email = 'test@test.com';
const password = 'test1234';
const loginUrl = environment.loginUrl + environment.firebaseAPIKey;
const registerUrl = environment.registerUrl + environment.firebaseAPIKey;
const response: AuthResponseData = {
  kind: 'test',
  localId: 'test',
  email: 'test@test.com',
  idToken: 'test',
  registered: true,
  refreshToken: 'test',
  expiresIn: '3600'
};

const fakeBEResponse = (errorText: string) => {
  return {
    error: {
      error: {
        message: errorText,
        errors: [
          {
            message: errorText
          }
        ]
      }
    }
  };
};

describe('AuthService', () => {
  let authService: AuthService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, MatSnackBarModule]
    });
    authService = TestBed.inject(AuthService);
    controller = TestBed.inject(HttpTestingController);
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
  });

  it('should be created', () => expect(authService).toBeTruthy());

  it('should get data from server after logging in', () => {
    let expectedResponse: AuthResponseData | null;
    authService.login$(email, password).subscribe((response) => {
      expectedResponse = response;
    });

    const request = controller.expectOne(loginUrl);
    request.flush(response);
    expect(expectedResponse).toEqual(response);
  });

  it('should get data from server after registering', () => {
    let expectedResponse: AuthResponseData | null;
    authService.signup$(email, password).subscribe((response) => {
      expectedResponse = response;
    });

    const request = controller.expectOne(registerUrl);
    request.flush(response);
    controller.verify();

    expect(expectedResponse).toEqual(response);
  });

  it('should pass through request error', () => {
    const errorEvent = new ErrorEvent('API error');

    let expectedError: HttpErrorResponse | null;

    authService.login$(email, password).subscribe(
      () => {
        fail('next handler must not be called');
      },
      (error) => {
        expectedError = error;
      },
      () => {
        fail('complete handler must not be called');
      }
    );

    controller.expectOne(loginUrl).error(errorEvent);

    expect(expectedError).toBeDefined();
  });

  it('should return an unknown error if the error response from BE is not defined', () => {
    const fakeResponse = {
      error: {
        error: null
      }
    } as HttpErrorResponse;
    authService['handleError'](fakeResponse).subscribe(
      () => {},
      (errorResponse) => {
        expect(errorResponse).toEqual(errorResponses.DEFAULT_ERROR);
      }
    );
  });

  it('should return an password error for BE response - invalid password', () => {
    authService['handleError'](
      fakeBEResponse('INVALID_PASSWORD') as HttpErrorResponse
    ).subscribe(
      () => {},
      (error) => {
        expect(error).toEqual(errorResponses.PASSWORD_ERROR);
      }
    );
  });

  it('should return an email error for BE response - email exists', () => {
    authService['handleError'](
      fakeBEResponse('EMAIL_EXISTS') as HttpErrorResponse
    ).subscribe(
      () => {},
      (error) => {
        expect(error).toEqual(errorResponses.EMAIL_EXISTS);
      }
    );
  });

  it('should return an email error for BE response - email not found', () => {
    authService['handleError'](
      fakeBEResponse('EMAIL_NOT_FOUND') as HttpErrorResponse
    ).subscribe(
      () => {},
      (error) => {
        expect(error).toEqual(errorResponses.EMAIL_ERROR);
      }
    );
  });

  it('autoLogin should not login if an user is not defined in local storage', () => {
    expect(authService.autoLogin()).toBeFalsy();
  })
});
