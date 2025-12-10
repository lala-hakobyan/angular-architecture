import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SavedCartItem} from '../../data/cart-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  public getSavedCartsData(): Observable<SavedCartItem[]> {
    return this.httpClient.get('http://localhost:3020/api/cart/saved-items') as Observable<SavedCartItem[]>;
  }
}
