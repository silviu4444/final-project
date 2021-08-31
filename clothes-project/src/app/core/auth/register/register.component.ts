import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';

import { CustomValidators } from 'src/app/shared/custom-validators/custom-validators';
import { errorStateMatcher } from 'src/app/shared/custom-validators/errorStateMatcher';
import { AuthResponseData, AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  signupForm: FormGroup = new FormGroup({});
  matcher = new errorStateMatcher();
  isLoading = false;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      passwords: new FormGroup(
        {
          password: new FormControl(null, [
            Validators.required,
            Validators.minLength(8)
          ]),
          confirmPassword: new FormControl(null, [Validators.required])
        },
        { validators: CustomValidators.passwordMatch }
      )
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      duration: 3000
    });
  }

  onSubmit() {
    if (!this.signupForm.valid) return;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.passwords.password;
    this.isLoading = true;
    let auth$: Observable<AuthResponseData> = this.authService.signup(email, password);
    auth$.subscribe(
      (responseData) => {
        this.isLoading = false;
        this.openSnackBar('Your account has been created!');
        this.router.navigate(['/']);
      },
      (errorMessage) => {
        this.isLoading = false;
        this.signupForm.get('email').setErrors({ emailExist: true});
      }
    );
  }
}
