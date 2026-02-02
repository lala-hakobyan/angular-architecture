import {ChangeDetectionStrategy, Component, inject, OnDestroy} from '@angular/core';
import {CartItemData} from '../../../../data/cart-model';
import {CartStore} from '../../../../shared/store/cart-store';
import {AsyncPipe, CurrencyPipe} from '@angular/common';
import {Button} from '../../../../shared/components/ui-components/button/button';
import {CartItem} from '../../../../shared/components/ui-components/cart-item/cart-item';
import {ApiService} from '../../../../shared/services/api-service';
import {Subject} from 'rxjs';
import {MockCartItem} from '../../../../mock/cart-item-mock';
import { HelpersService } from '../../../../shared/utils/helper-service';

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
    this.cartStore.addItem({...MockCartItem, id: HelpersService.generateRandomId()});
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
