import {Component, inject, Signal} from '@angular/core';
import {Color, SavedCartItem, Size} from '../../../../data/cart-model';
import {CartSignalStore} from '../../store/cart-signal-store';
import {CartSignalItem} from '../../ui-components/cart-signal-item/cart-signal-item';

@Component({
  selector: 'app-shopping-cart-signal',
  imports: [
    CartSignalItem
  ],
  templateUrl: './shopping-cart-signal.html',
  styleUrl: './shopping-cart-signal.scss'
})
export class ShoppingCartSignal {
  protected savedCartItems: SavedCartItem[] = [
    {
      cart: {
        id: '5323aa36-ed4c-4517-95f5-5c47bec77039',
        name: 'Wireless Headphones',
        description: 'Bluetooth over-ear headphones with noise cancellation',
        inStock: true
      },
      quantity: 2,
      color: Color.black,
      size: Size.md
    },
    {
      cart: {
        id: '180702cb-514a-47cd-a7e3-3f4717b555a4',
        name: 'Graphic T-Shirt',
        description: 'Cotton t-shirt with printed artwork',
        inStock: true
      },
      quantity: 1,
      color: Color.blue,
      size: Size.lg
    },
    {
      cart: {
        id: '8358391a-662b-401b-8d11-120f468d571b',
        name: 'Running Shoes',
        description: 'Lightweight shoes for daily running',
        inStock: false
      },
      quantity: 1,
      color: Color.Green,
      size: Size.sm
    }
  ];

  private newCartItem: SavedCartItem = {
    cart: {
      id: '8b7e3f24-c2df-4d18-9e6a-63c9e7b3f1af',
      name: 'Smartwatch Pro',
      description: 'Water-resistant smartwatch with heart-rate monitor and GPS',
      inStock: true
    },
    quantity: 1,
    color: Color.blue,
    size: Size.sm
  }

  protected cartStore = inject(CartSignalStore);

  protected currentCartList: Signal<SavedCartItem[] | null> = this.cartStore.cartList;

  constructor() {
    this.showSavedCartItems();
  }

  showSavedCartItems() {
    this.cartStore.cartList = this.savedCartItems;
  }

  addItemToCart() {
    this.cartStore.addItem(this.newCartItem);
  }

  removeItemFromCart(itemId: string | null) {
    if(itemId) {
      this.cartStore.removeItem(itemId);
    }
  }
}
