import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CartStore} from '../../../store/cart-store';
import {AsyncPipe} from '@angular/common';
import {CartBasketUi} from '../../ui-components/cart-basket-ui/cart-basket-ui';

@Component({
  selector: 'app-cart-basket',
  imports: [
    AsyncPipe,
    CartBasketUi
  ],
  templateUrl: './cart-basket.html',
  styleUrl: './cart-basket.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartBasket {
  protected cartStore = inject(CartStore);

  protected cartTotal$ = this.cartStore.totalCount$;
}
