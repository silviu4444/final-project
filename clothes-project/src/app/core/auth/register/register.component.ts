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

export class errorStateMatcher implements ErrorStateMatcher {
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
  animations: [],
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});
  matcher = new errorStateMatcher();

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      passwords: new FormGroup(
        {
          password: new FormControl(null, [
            Validators.required,
            Validators.minLength(8),
          ]),
          confirmPassword: new FormControl(null, [Validators.required]),
        },
        { validators: CustomValidatorsComponent.passwordMatch }
      ),
    });
  }

  showSatisfiedIcon(string: string): boolean {
    return this.signupForm.get(string).untouched && !this.signupForm.get(string).valid;
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
