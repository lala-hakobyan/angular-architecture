import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CartSignalStore} from '../../../store/cart-signal-store';
import {CartBasketUi} from '../../ui-components/cart-basket-ui/cart-basket-ui';


@Component({
  selector: 'app-cart-signal-basket',
  imports: [
    CartBasketUi
  ],
  templateUrl: './cart-signal-basket.html',
  styleUrl: './cart-signal-basket.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartSignalBasket {
  signalCartStore = inject(CartSignalStore);
  cartTotal =  this.signalCartStore.totalCount;
}
