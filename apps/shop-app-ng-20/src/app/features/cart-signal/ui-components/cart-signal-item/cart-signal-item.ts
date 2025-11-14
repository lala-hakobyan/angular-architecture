import {Component, input, output} from '@angular/core';
import {SavedCartItem} from '../../../../data/cart-model';

@Component({
  selector: 'app-cart-signal-item',
  imports: [],
  templateUrl: './cart-signal-item.html',
  styleUrl: './cart-signal-item.scss'
})
export class CartSignalItem {
  public cartItem = input<SavedCartItem>();

  public remove = output<string | null>();

  removeItem() {
    this.remove.emit(this.cartItem()?.cart.id ?? null);
  }
}
