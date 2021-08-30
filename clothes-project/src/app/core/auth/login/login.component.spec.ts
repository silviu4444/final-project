import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  Validators
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { AngularMaterialModule } from 'src/app/material.module';
import { AuthService } from '../auth.service';
import { LoginComponent } from './login.component';

const authServiceMock = {
  login: () => of(true)
};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let form: FormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        RouterTestingModule
      ],
      providers: [{ provide: AuthService, useValue: authServiceMock }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    form = new FormGroup({
      email: new FormControl('test@test.com'),
      password: new FormControl('test1234')
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should call open method when openSnackBar is called', () => {
    const spyOnSnackBarOpen = spyOn(component['_snackBar'], 'open');
    component.openSnackBar('test');
    expect(spyOnSnackBarOpen).toHaveBeenCalledWith('test', 'Close', {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      duration: 3000
    });
  });

  it('onSubmit should not continue the execution if the form is not valid', () => {
    const form = new FormGroup({
      email: new FormControl('awda', [Validators.required, Validators.email]),
      password: new FormControl(null)
    });
    const spyOnLogin = spyOn(component['authService'], 'login');
    component.onSubmit({ form } as NgForm);
    expect(spyOnLogin).not.toHaveBeenCalled();
  });

  it('onSubmit should continue the execution if the form is valid(for success BE response)', () => {
    const spyOnOpenSnackBar = spyOn(component, 'openSnackBar');
    const spyOnRouter = spyOn(component['router'], 'navigate');
    component.onSubmit({ form } as NgForm);
    component['authService'].login('test', 'test1234').subscribe(() => {
      expect(component.isLoading).toBeFalsy();
      expect(spyOnOpenSnackBar).toHaveBeenCalledWith('Logged in succesfully!');
      expect(spyOnRouter).toHaveBeenCalledWith(['/']);
    });
  });

  it('onSubmit should continue the execution if the form is valid(for fail BE response)', () => {
    spyOn(component['authService'], 'login').and.returnValue(throwError(null));
    const spyOnHandleLoginErrors = spyOn(component, 'handleLoginErrors');
    component.onSubmit({ form } as NgForm);
    component['authService'].login('test', 'test1234').subscribe(
      (success) => {},
      (error) => {
        expect(component.isLoading).toBeFalsy();
        expect(spyOnHandleLoginErrors).toHaveBeenCalledWith(error, form);
      }
    );
  });

  it('should set an error on form.email, calling handleLoginErrors with an email error', () => {
    component.handleLoginErrors('This email does not exist', form);
    expect(form.get('email').errors['emailNotExist']).toBeDefined();
  });

  it('should set an error on form.password, calling handleLoginErrors with an password error', () => {
    component.handleLoginErrors('This password is not correct', form);
    expect(form.get('password').errors['pwIncorrect']).toBeDefined();
  });

  it('should call openSnackBar if handleLoginErrors is called with a dumb error', () => {
    const spyOnOpenSnackBar = spyOn(component, 'openSnackBar');
    component.handleLoginErrors('dumb error', form);
    expect(spyOnOpenSnackBar).toHaveBeenCalledWith(
      'An unknown error ocurred. Try again later'
    );
  });
});
