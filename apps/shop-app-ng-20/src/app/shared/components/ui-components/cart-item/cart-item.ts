import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CartItemData} from '../../../../data/cart-model';
import {Button} from '../button/button';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [
    Button,
    CurrencyPipe
  ],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItem {
  @Input() cartItem!: CartItemData;

  @Output() remove = new EventEmitter<string>();

  removeItem() {
    this.remove.emit(this.cartItem.product.id);
  }

  calculateTotalPrice() {
    if(!this.cartItem) return 0;

    return this.cartItem.product.price * this.cartItem.quantity;
  }
}
