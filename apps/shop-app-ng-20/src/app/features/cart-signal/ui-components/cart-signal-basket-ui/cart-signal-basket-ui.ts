import {Component, input} from '@angular/core';

@Component({
  selector: 'app-cart-signal-basket-ui',
  imports: [],
  templateUrl: './cart-signal-basket-ui.html',
  styleUrl: './cart-signal-basket-ui.scss'
})
export class CartSignalBasketUi {
  cartTotal = input<number | undefined>();
}
