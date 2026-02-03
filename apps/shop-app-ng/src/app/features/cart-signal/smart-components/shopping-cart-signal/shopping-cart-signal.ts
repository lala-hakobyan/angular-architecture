import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {Color, CartItemData, Size} from '../../../../data/cart-model';
import {CartSignalStore} from '../../../../shared/store/cart-signal-store';
import {CartItem} from '../../../../shared/components/ui-components/cart-item/cart-item';
import {Button} from '../../../../shared/components/ui-components/button/button';
import { ApiService } from '../../../../shared/services/api-service';
import { MockCartItem } from '../../../../mock/cart-item-mock';
import { PageTitle } from "../../../../shared/components/ui-components/page-title/page-title";

@Component({
  selector: 'app-shopping-cart-signal',
  imports: [
    CartItem,
    Button,
    PageTitle
],
  templateUrl: './shopping-cart-signal.html',
  styleUrl: './shopping-cart-signal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartSignal {
  protected cartStore = inject(CartSignalStore);
  private apiService: ApiService = inject(ApiService);

  protected currentCartList: Signal<CartItemData[] | null> = this.cartStore.cartList;

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
    this.cartStore.addItem(MockCartItem);
  }

  removeItemFromCart(itemId: string | null) {
    if(itemId) {
      this.cartStore.removeItem(itemId);
    }
  }
}
