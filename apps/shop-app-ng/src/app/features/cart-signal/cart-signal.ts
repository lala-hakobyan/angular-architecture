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
  constructor() {
    console.info(
      '%c ℹ️ The Cart page is using a store based on Signals. You can use the `useSignalStore: false` option in `environment.ts` files to enable an RxJS BehaviorSubject-based store for this page.',
      'font-size: 14px; color: #0d6efd; font-weight: 600; font-family: system-ui, -apple-system, sans-serif;'
    );
  }
}
