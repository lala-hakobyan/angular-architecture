import { Component } from '@angular/core';
import {CartBasket} from "../../components/smart-components/cart-basket/cart-basket";
import {Nav} from '../nav/nav';

@Component({
  selector: 'app-header',
  imports: [
    CartBasket,
    Nav
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
