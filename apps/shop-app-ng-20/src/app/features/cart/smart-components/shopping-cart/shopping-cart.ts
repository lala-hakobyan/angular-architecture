import {Component, inject, OnDestroy} from '@angular/core';
import {Color, SavedCartItem, Size} from '../../../../data/cart-model';
import {CartStore} from '../../../../shared/store/cart-store';
import {AsyncPipe} from '@angular/common';
import {Button} from '../../../../shared/components/ui-components/button/button';
import {CartItem} from '../../../../shared/components/ui-components/cart-item/cart-item';
import {ApiService} from '../../../../shared/services/api-service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  imports: [
    CartItem,
    AsyncPipe,
    Button
  ],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss'
})
export class ShoppingCart implements OnDestroy{
  private destroy$  = new Subject<void>();
  private apiService: ApiService = inject(ApiService);

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

  protected cartStore = inject(CartStore);

  protected currentCartList$ = this.cartStore.cartList$;

  constructor() {
    this.showSavedCartItems();
  }

  showSavedCartItems() {
    this.apiService.getSavedCartsData().subscribe({
      next: (savedCartItems: SavedCartItem[]) => (this.cartStore.cartList = savedCartItems),
      error: () => (console.log('Error happened when fetching api data.')),
    })
  }

  addItemToCart() {
    this.cartStore.addItem(this.newCartItem);
  }

  removeItemFromCart(itemId: string) {
    this.cartStore.removeItem(itemId);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
