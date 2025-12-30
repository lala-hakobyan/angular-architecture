import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
  AbstractControl, FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {AddressField} from '../data/address.model';
import {Countries, ErrorMessages} from '../data/account.constants';
import {Button} from '../../../shared/components/ui-components/button/button';

@Component({
  selector: 'app-address-form',
  imports: [
    ReactiveFormsModule,
    Button
  ],
  templateUrl: './address-form.html',
  styleUrl: './address-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressForm {
  private formBuilder= inject(FormBuilder);

  protected readonly errorMessages = ErrorMessages;

  protected  readonly countries = Countries;

  protected readonly countryDefaultValue = '---Choose Country---';

  protected addressForm1 = new FormGroup({
    country: new FormControl(-1, this.dropdownSelectionValidator()),
    fullName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required)
  })

  protected addressForm = this.formBuilder.group({
    country: new FormControl(-1, this.dropdownSelectionValidator()),
    fullName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required)
  })

  protected isError(fieldName: AddressField) {
    const control = this.addressForm.get(fieldName);
    return control?.touched && control?.errors;
  }

  protected submitForm() {
    console.log(this.addressForm.value);
  }

  private dropdownSelectionValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
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

}
