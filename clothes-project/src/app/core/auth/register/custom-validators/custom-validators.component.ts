import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

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

  static passwordMatchValidator(control: AbstractControl): {
    [key: string]: boolean;
  } {
    const passwordsNotMatch =
    control.get('password').value !== control.get('confirmPassword').value;
    if (!passwordsNotMatch) {
      const previousErrors = control.get('confirmPassword').errors;
      control.get('confirmPassword').setErrors({...previousErrors, noPassswordMatch: false});
    }
    if (passwordsNotMatch) {
      const previousErrors = control.get('confirmPassword').errors;
      control.get('confirmPassword').setErrors({...previousErrors, noPassswordMatch: true });
      return { noPassswordMatch: true };
    }
    return null;
  }
}
