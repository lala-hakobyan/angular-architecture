import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  imports: [],
  templateUrl: './page-title.html',
  styleUrl: './page-title.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTitle {
  @Input() title: string = '';
}
