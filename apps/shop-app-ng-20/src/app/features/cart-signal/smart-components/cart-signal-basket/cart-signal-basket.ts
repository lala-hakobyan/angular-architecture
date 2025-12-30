import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CartSignalStore} from '../../store/cart-signal-store';
import {CartSignalBasketUi} from '@cart/-signal/ui-components/cart-signal-basket-ui/cart-signal-basket-ui';

@Component({
  selector: 'app-cart-signal-basket',
  imports: [
    CartSignalBasketUi
  ],
  templateUrl: './cart-signal-basket.html',
  styleUrl: './cart-signal-basket.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartSignalBasket {
  signalCartStore = inject(CartSignalStore);
  cartTotal =  this.signalCartStore.totalCount;
}
