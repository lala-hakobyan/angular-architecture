import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {SavedCartItem} from '../../../data/cart-model';

@Injectable({
  providedIn: 'root'
})
export class CartSignalStore {
  private cartListProp: WritableSignal<SavedCartItem[] | null> = signal<SavedCartItem[] | null>(null);

  public get cartList(): Signal<SavedCartItem[] | null> {
    return this.cartListProp.asReadonly();
  }

  public set cartList(value: SavedCartItem[] | null) {
    this.cartListProp.set(value);
  }

  public totalCount = computed(() => this.cartList()?.reduce((sum, item) => sum + item.quantity, 0));

  public addItem(item: SavedCartItem) {
    this.cartList = [...this.cartList() ?? [], item];
  }

  public removeItem(itemId: string) {
    const newList: SavedCartItem[] | undefined = this.cartList()?.filter(item => item.cart.id !== itemId);
    this.cartList = newList ? newList : null;
  }
}
