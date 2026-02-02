import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CartBasket} from "../../components/smart-components/cart-basket/cart-basket";
import {Nav} from '../nav/nav';

@Component({
  selector: 'app-header',
  imports: [
    CartBasket,
    Nav
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {

}
