import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  isLoading = false;

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      duration: 3000
    });
  }

  onSubmit({ form }: NgForm) {
    if (!form.valid) return;
    const email = form.controls.email.value;
    const password = form.controls.password.value;
    let authObs: Observable<AuthResponseData> = this.authService.login(
      email,
      password
    );
    this.isLoading = true;
    authObs.subscribe(
      (responseData) => {
        this.isLoading = false;
        this.openSnackBar('Logged in succesfully!');
        this.router.navigate(['/']);
      },
      (errorResponse) => {
        this.isLoading = false;
        this.handleLoginErrors(errorResponse, form);
      }
    );
  }

  handleLoginErrors(error: string, form: FormGroup) {
    const EMAIL_ERROR = 'This email does not exist';
    const PASSWORD_ERROR = 'This password is not correct';
    const DEFAULT_ERROR = 'An unknown error ocurred';
    const errorCases = {
      [EMAIL_ERROR]: function () {
        form.get('email').setErrors({ emailNotExist: true });
      },
      [PASSWORD_ERROR]: function () {
        form.get('password').setErrors({ pwIncorrect: true });
      },
      [DEFAULT_ERROR]: () => {
        this.openSnackBar('An unknown error ocurred. Try again later');
      }
    };
    errorCases[error] ? errorCases[error]() : errorCases[DEFAULT_ERROR]();
  }
}
