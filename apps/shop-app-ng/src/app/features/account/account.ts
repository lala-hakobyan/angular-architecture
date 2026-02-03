import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AddressForm} from './address-form/address-form';
import {AddressFormTmpl} from './address-form-tmpl/address-form-tmpl';
import {environment} from '../../../environments/environment';
import {PageTitle} from "../../shared/components/ui-components/page-title/page-title";

@Component({
  selector: 'app-account',
  imports: [
    AddressForm,
    AddressFormTmpl,
    PageTitle
],
  templateUrl: './account.html',
  styleUrl: './account.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Account {
  protected isTemplateDrivenForms = environment.useTemplateDrivenForms;
}
