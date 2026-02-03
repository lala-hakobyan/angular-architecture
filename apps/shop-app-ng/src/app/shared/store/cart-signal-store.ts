import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {CartItemData} from '../../data/cart-model';

@Injectable({
  providedIn: 'root'
})
export class CartSignalStore {
  private cartListProp: WritableSignal<CartItemData[] | null> = signal<CartItemData[] | null>(null);

  public get cartList(): Signal<CartItemData[] | null> {
    return this.cartListProp.asReadonly();
  }

  public set cartList(value: CartItemData[] | null) {
    this.cartListProp.set(value);
  }

  public totalCount = computed(() => this.cartList()?.reduce((sum, item) => sum + item.quantity, 0));

  public addItem(item: CartItemData) {
    this.cartList = [...this.cartList() ?? [], item];
  }

  public removeItem(itemId: string) {
    const newList: CartItemData[] | undefined = this.cartList()?.filter(item => item.id !== itemId);
    this.cartList = newList ? newList : null;
  }
}
