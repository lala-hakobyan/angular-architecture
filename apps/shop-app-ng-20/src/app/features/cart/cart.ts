import { Component } from '@angular/core';
import {ShoppingCart} from './smart-components/shopping-cart/shopping-cart';

@Component({
  selector: 'app-cart',
  imports: [
    ShoppingCart,
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {

}
