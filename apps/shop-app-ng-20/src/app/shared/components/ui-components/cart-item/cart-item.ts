import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {SavedCartItem} from '../../../../data/cart-model';
import {Button} from '../button/button';

@Component({
  selector: 'app-cart-item',
  imports: [
    Button
  ],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItem {
  @Input() cartItem!: SavedCartItem;

  @Output() remove = new EventEmitter<string>();

  removeItem() {
    this.remove.emit(this.cartItem.cart.id);
  }
}
