import {Component, Input} from '@angular/core';
import {ButtonSize, ButtonStyle} from '../../../../data/button-model';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() buttonStyle: ButtonStyle = 'primary';

  @Input() label: string = '';

  @Input() buttonSize: ButtonSize = 'md';
}
