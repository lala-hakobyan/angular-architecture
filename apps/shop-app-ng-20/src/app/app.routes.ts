import { Routes } from '@angular/router';
import {Cart} from '@cart//cart';
import {Blog} from './features/blog/blog';
import {CartSignal} from '@cart/-signal/cart-signal';
import {Account} from './features/account/account';
import {Shop} from './features/shop/shop';

export const routes: Routes = [
  { path: '', component: Shop},
  { path: 'shop', component: Shop },
  { path: 'blog', component: Blog },
  { path: 'cart', component: Cart },
  { path: 'cart-signal', component: CartSignal},
  { path: 'account', component: Account}
];
