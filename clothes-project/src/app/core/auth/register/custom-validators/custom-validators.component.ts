import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-custom-validators',
  templateUrl: './custom-validators.component.html',
  styleUrls: ['./custom-validators.component.scss'],
})
export class CustomValidatorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }

  static passwordMatch: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    const isMach =
      password.value === confirmPassword.value &&
      !confirmPassword.hasError('required')
        ? null
        : { ...confirmPassword.errors, notSame: true };

    confirmPassword.setErrors(isMach);
    return password.value === confirmPassword.value ? null : { notSame: true };
  };
}
