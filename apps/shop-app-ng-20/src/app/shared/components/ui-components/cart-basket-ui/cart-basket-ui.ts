import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cart-basket-ui',
  imports: [],
  templateUrl: './cart-basket-ui.html',
  styleUrl: './cart-basket-ui.scss'
})
export class CartBasketUi {
  @Input() cartTotal!: number | undefined;
}
