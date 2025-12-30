import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddressFormType} from '../data/address.model';
import {Countries, ErrorMessages} from '../data/account.constants';
import {DropdownValidator} from '../utils/dropdown-validator';
import {Button} from '../../../shared/components/ui-components/button/button';

@Component({
  selector: 'app-address-form-tmpl',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DropdownValidator,
    Button
  ],
  templateUrl: './address-form-tmpl.html',
  styleUrl: './address-form-tmpl.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressFormTmpl {
  protected formModel: AddressFormType = {
    country: -1,
    fullName: '',
    address: '',
    phoneNumber: ''
  };

  protected readonly errorMessages = ErrorMessages;

  protected  readonly countries = Countries;

  protected readonly countryDefaultValue = '---Choose Country---';

  protected submitForm() {
    console.log(this.formModel);
  }
}
