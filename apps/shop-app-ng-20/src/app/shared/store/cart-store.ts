import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';
import {SavedCartItem} from '../../data/cart-model';

@Injectable({
  providedIn: 'root'
})
export class CartStore {

  private cartListProp = new BehaviorSubject<SavedCartItem[] | null>(null);

  cartList$ = this.cartListProp.asObservable();

  public get cartList(): SavedCartItem[] | null {
    return this.cartListProp.value;
  }

  public set cartList(value: SavedCartItem[] | null) {
    this.cartListProp.next(value);
  }

  public addItem(item: SavedCartItem) {
    const cartList: SavedCartItem[] = this.cartList ?? [];
    // Be careful with this, because inner cart is not deep copied in this case
    this.cartList = [...cartList, item];
  }

  public removeItem(itemId: string) {
    const cartList: SavedCartItem[] = this.cartList ?? [];
    this.cartList = cartList.filter(item => item.cart.id !== itemId);
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
