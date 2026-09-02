import {ChangeDetectionStrategy, Component, inject, OnDestroy} from '@angular/core';
import {CartItemData} from '../../../../data/cart-model';
import {CartStore} from '../../../../shared/store/cart-store';
import {AsyncPipe, CurrencyPipe} from '@angular/common';
import {Button} from '../../../../shared/components/ui-components/button/button';
import {CartItem} from '../../../../shared/components/ui-components/cart-item/cart-item';
import {ApiService} from '../../../../shared/services/api-service';
import {BehaviorSubject, Subject} from 'rxjs';
import {MockCartItem} from '../../../../mock/cart-item-mock';
import {HelpersService} from '../../../../shared/utils/helper-service';
import {PageTitle} from '../../../../shared/components/ui-components/page-title/page-title';
import {GlobalConstants} from '../../../../data/global.constants';

@Component({
  selector: 'app-shopping-cart',
  imports: [
    CartItem,
    AsyncPipe,
    Button,
    CurrencyPipe,
    PageTitle
  ],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCart implements OnDestroy {
  private destroy$  = new Subject<void>();
  private apiService: ApiService = inject(ApiService);

  protected errorMessage = GlobalConstants.apiFailureMsg

  protected cartStore = inject(CartStore);
  protected currentCartList$ = this.cartStore.cartList$;
  protected isError$ = new BehaviorSubject<boolean | null>(null);
  protected isLoading$ = new BehaviorSubject<boolean>(true);

  constructor() {
    this.showCartItems();
  }

  showCartItems() {
    this.isError$.next(false);
    this.isLoading$.next(true);

    this.apiService.getCartSavedItemsData().subscribe({
      next: (cartItems: CartItemData[]) => {
        this.cartStore.cartList = cartItems;
        this.isLoading$.next(false);
        this.isError$.next(false);
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
        this.isError$.next(true);
        this.isLoading$.next(false);
      },
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
