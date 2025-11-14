import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddressFormType} from '../data/address.model';
import {Countries, ErrorMessages} from '../data/account.constants';
import {DropdownValidator} from '../utils/dropdown-validator';

@Component({
  selector: 'app-address-form-tmpl',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DropdownValidator
  ],
  templateUrl: './address-form-tmpl.html',
  styleUrl: './address-form-tmpl.scss'
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
