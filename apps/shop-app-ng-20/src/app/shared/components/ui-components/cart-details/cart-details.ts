import {ChangeDetectionStrategy, Component, Input} from '@angular/core';


@Component({
  selector: 'app-cart-details',
  imports: [
  ],
  templateUrl: './cart-details.html',
  styleUrl: './cart-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class CartDetails {
  @Input() details: string | null = null;

  constructor() {
  }
}
