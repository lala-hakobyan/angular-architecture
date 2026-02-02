import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';
import {CartItemData} from '../../data/cart-model';

@Injectable({
  providedIn: 'root'
})
export class CartStore {
  private cartListProp = new BehaviorSubject<CartItemData[] | null>(null);

  cartList$ = this.cartListProp.asObservable();

  public get cartList(): CartItemData[] | null {
    return this.cartListProp.value;
  }

  public set cartList(value: CartItemData[] | null) {
    this.cartListProp.next(value);
  }

  public addItem(item: CartItemData) {
    const cartList: CartItemData[] = this.cartList ?? [];
    // Be careful with this, because inner cart is not deeply copied in this case
    this.cartList = [...cartList, item];
  }

  public removeItem(itemId: string) {
    const cartList: CartItemData[] = this.cartList ?? [];
    this.cartList = cartList.filter(item => item.id !== itemId);
  }

  public totalCount$ = this.cartList$.pipe(
    map(items => {
      if(items) {
        return items.reduce((sum, item) => sum + item.quantity, 0);
      }
      return null;
    })
  )
}
