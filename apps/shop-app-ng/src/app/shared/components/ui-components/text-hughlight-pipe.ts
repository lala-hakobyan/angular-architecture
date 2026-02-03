import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textHughlight'
})
export class TextHughlightPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
