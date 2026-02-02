import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ButtonSize, ButtonStyle, ButtonType} from '../../../../data/button-model';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button {
  @Input() buttonStyle: ButtonStyle = 'primary';

  @Input() label: string = '';

  @Input() buttonSize: ButtonSize = 'md';

  @Input() type: ButtonType = 'button';

  @Input() disabled: boolean | null = null;
}
