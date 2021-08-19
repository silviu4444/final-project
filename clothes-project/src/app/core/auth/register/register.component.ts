import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [

  ]
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      passwords: new FormGroup(
        {
          password: new FormControl(null, [
            Validators.required,
            CustomValidatorsComponent.patternValidator(/\d/, {
              hasNumber: true,
            }),
            CustomValidatorsComponent.patternValidator(/[A-Z]/, {
              hasCapitalCase: true,
            }),
            CustomValidatorsComponent.patternValidator(/[a-z]/, {
              hasSmallCase: true,
            }),
            Validators.minLength(8),
          ]),
          confirmPassword: new FormControl(null, [Validators.required]),
        },
        { validators: CustomValidatorsComponent.passwordMatchValidator }
      ),
    });
  }

  matcher = new MyErrorStateMatcher();

  onSubmit() {
    console.log(this.signupForm);
  }
}
