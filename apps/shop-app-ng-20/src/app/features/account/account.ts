import { Component } from '@angular/core';
import {AddressForm} from './address-form/address-form';
import {AddressFormTmpl} from './address-form-tmpl/address-form-tmpl';

@Component({
  selector: 'app-account',
  imports: [
    AddressForm,
    AddressFormTmpl
  ],
  templateUrl: './account.html',
  styleUrl: './account.scss'
})
export class Account {

}
