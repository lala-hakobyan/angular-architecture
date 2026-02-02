import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/layout/header/header';
import { Footer } from './shared/layout/footer/footer';
import { PromoBar } from './shared/layout/promo-bar/promo-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, PromoBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected title = 'shop-app-ng';
}
