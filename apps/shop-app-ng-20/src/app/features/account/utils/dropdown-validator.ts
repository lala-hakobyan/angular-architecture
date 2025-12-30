import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appDropdownValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DropdownValidator, multi: true }]
})
export class DropdownValidator implements  Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if(control.value === -1) {
      return {
        errors:
          {
            required: true
          }
      };
    }
    return null;
  }
}
