import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {ApiService} from '../../../../shared/services/api-service';

@Component({
  selector: 'app-cart-signal-basket-ui',
  imports: [],
  providers: [ApiService],
  templateUrl: './cart-signal-basket-ui.html',
  styleUrl: './cart-signal-basket-ui.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartSignalBasketUi {
  cartTotal = input<number | undefined>();
}
