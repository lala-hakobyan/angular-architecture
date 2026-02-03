import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ShoppingCart} from './smart-components/shopping-cart/shopping-cart';

@Component({
  selector: 'app-cart',
  imports: [
    ShoppingCart,
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cart {
  constructor() {
    console.info(
      '%c ℹ️ The Cart page is using a store based on RxJS BehaviorSubject. You can use the `useSignalStore: true` option in environment.ts files to enable a Signal-based store for this page.',
      'font-size: 14px; color: #0d6efd; font-weight: 600; font-family: system-ui, -apple-system, sans-serif;'
    );
  }
}
