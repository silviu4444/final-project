import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { CustomValidators } from 'src/app/shared/custom-validators/custom-validators';
import { errorStateMatcher } from 'src/app/shared/custom-validators/errorStateMatcher';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
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
        { validators: CustomValidators.passwordMatch }
      ),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
