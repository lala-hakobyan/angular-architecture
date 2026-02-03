import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from '../../shared/components/ui-components/button/button';
import { Router } from '@angular/router';
import { PageTitle } from "../../shared/components/ui-components/page-title/page-title";

@Component({
  selector: 'app-shop',
  imports: [
    Button, 
    PageTitle
  ],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Shop {
  private router = inject(Router);
  
  protected goToCartPage() {
    this.router.navigate(['/cart']);
  }
}
