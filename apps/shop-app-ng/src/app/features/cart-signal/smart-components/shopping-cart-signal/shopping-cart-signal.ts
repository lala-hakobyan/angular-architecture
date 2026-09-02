import {ChangeDetectionStrategy, Component, inject, signal, Signal, WritableSignal} from '@angular/core';
import {CartItemData} from '../../../../data/cart-model';
import {CartSignalStore} from '../../../../shared/store/cart-signal-store';
import {CartItem} from '../../../../shared/components/ui-components/cart-item/cart-item';
import {Button} from '../../../../shared/components/ui-components/button/button';
import { ApiService } from '../../../../shared/services/api-service';
import { MockCartItem } from '../../../../mock/cart-item-mock';
import { PageTitle } from "../../../../shared/components/ui-components/page-title/page-title";
import {GlobalConstants} from '../../../../data/global.constants';

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

  protected errorMessage = GlobalConstants.apiFailureMsg;

  protected currentCartList: Signal<CartItemData[] | null> = this.cartStore.cartList;
  protected isLoading: WritableSignal<boolean> = signal(true);
  protected isError: WritableSignal<boolean | null> = signal(null);


  constructor() {
    this.showCartItems();
  }

  showCartItems() {
    this.isLoading.set(true)
    this.isError.set(false);

    this.apiService.getCartSavedItemsData().subscribe({
      next: (cartItems: CartItemData[]) => {
        this.cartStore.cartList = cartItems;
        this.isLoading.set(false);
        this.isError.set(false);
      },
      error: (error) => {
        console.error('Error happened when fetching saved items api data:', error);
        console.error('Error details:', {
          message: error.message,
          status: error.status,
          statusText: error.statusText,
          url: error.url,
          error: error.error
        });
        this.isLoading.set(false);
        this.isError.set(true);
      },
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
