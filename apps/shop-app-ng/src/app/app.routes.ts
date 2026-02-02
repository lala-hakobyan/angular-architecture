import { Routes } from '@angular/router';
import {Cart} from '@cart//cart';
import {Blog} from './features/blog/blog';
import {CartSignal} from '@cart/-signal/cart-signal';
import {Account} from './features/account/account';
import {Shop} from './features/shop/shop';
import {provideHttpClient} from '@angular/common/http';
import {ApiService} from './shared/services/api-service';

export const routes: Routes = [
  { path: '', redirectTo: 'shop', pathMatch: 'full'},
  { path: 'shop', component: Shop},
  { path: 'blog', component: Blog },
  { path: 'cart', component: Cart, providers: [provideHttpClient(), ApiService] },
  { path: 'cart-signal', component: CartSignal, providers: [provideHttpClient()]},
  { path: 'account', component: Account}
];
