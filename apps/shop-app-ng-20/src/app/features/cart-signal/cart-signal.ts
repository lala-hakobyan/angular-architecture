import { Component } from '@angular/core';
import { ShoppingCartSignal } from './smart-components/shopping-cart-signal/shopping-cart-signal';
import {CartSignalBasket} from '@cart/-signal/smart-components/cart-signal-basket/cart-signal-basket';


@Component({
  selector: 'app-cart-signal',
  imports: [ShoppingCartSignal, CartSignalBasket],
  templateUrl: './cart-signal.html',
  styleUrl: './cart-signal.scss'
})
export class CartSignal {

}
