import { ComponentFixture } from '@angular/core/testing';

import { CustomValidators } from './custom-validators';

describe('CustomValidators', () => {
  let validator: CustomValidators;

  beforeEach(() => {
    validator = new CustomValidators();
  })


  it('should have a method', () => {
    expect(CustomValidators.passwordMatch)
  })


});
