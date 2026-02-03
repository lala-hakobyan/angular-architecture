import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Nav} from '../nav/nav';
import { CartSignalBasket } from '../../components/smart-components/cart-signal-basket/cart-signal-basket';
import { CartBasket } from '../../components/smart-components/cart-basket/cart-basket';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  imports: [
    CartBasket,
    CartSignalBasket,
    Nav
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  protected isSignalStore = environment.useSignalStore;
}
