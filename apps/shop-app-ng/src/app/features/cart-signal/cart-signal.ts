import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoppingCartSignal } from './smart-components/shopping-cart-signal/shopping-cart-signal';

@Component({
  selector: 'app-cart-signal',
  imports: [ShoppingCartSignal],
  templateUrl: './cart-signal.html',
  styleUrl: './cart-signal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartSignal {

}
