import {ChangeDetectionStrategy, Component, inject, OnDestroy} from '@angular/core';
import {Color, CartItemData, Size} from '../../../../data/cart-model';
import {CartStore} from '../../../../shared/store/cart-store';
import {AsyncPipe, CurrencyPipe} from '@angular/common';
import {Button} from '../../../../shared/components/ui-components/button/button';
import {CartItem} from '../../../../shared/components/ui-components/cart-item/cart-item';
import {ApiService} from '../../../../shared/services/api-service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  imports: [
    CartItem,
    AsyncPipe,
    Button,
    CurrencyPipe
  ],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCart implements OnDestroy{
  private destroy$  = new Subject<void>();
  private apiService: ApiService = inject(ApiService);

  private newCartItem: CartItemData = {
    id: '3758e0c9-d758-411e-89a2-1a50315eaf8e',
    product: {
      id: '8b7e3f24-c2df-4d18-9e6a-63c9e7b3f1af',
      name: 'Smartwatch Pro',
      description: 'Water-resistant smartwatch with heart-rate monitor and GPS',
      inStock: true,
      price: 200
    },
    quantity: 1,
    color: Color.blue,
    size: Size.sm,
  }

  protected cartStore = inject(CartStore);

  protected currentCartList$ = this.cartStore.cartList$;

  constructor() {
    this.showCartItems();
  }

  showCartItems() {
    this.apiService.getCartItemsData().subscribe({
      next: (cartItems: CartItemData[]) => (this.cartStore.cartList = cartItems),
      error: () => (console.log('Error happened when fetching api data.')),
    })

    this.apiService.getCartSavedItemsData().subscribe({
      error: () => (console.log('Error happened when fetching saved items api data.')),
    })
  }

  addItemToCart() {
    this.cartStore.addItem(this.newCartItem);
  }

  removeItemFromCart(itemId: string) {
    this.cartStore.removeItem(itemId);
  }

  calculateTotalPrice(cartList: CartItemData[]): number {
    return cartList.reduce((total: number, curItem: CartItemData) => total + curItem.product.price * curItem.quantity, 0);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
