import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Countdown} from '../../components/ui-components/countdown/countdown';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-promo-bar',
  imports: [
    Countdown
  ],
  templateUrl: './promo-bar.html',
  styleUrl: './promo-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromoBar {
  public isVisible = signal(true);

  protected readonly promoBarDueDate = environment.promoBarDueDate;

  close() {
    this.isVisible.set(false);
  }
}
