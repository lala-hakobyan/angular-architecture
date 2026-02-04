import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinalDate'
})
export class OrdinalDatePipe implements PipeTransform {

  transform(value: string | Date | number): string {
    if (!value) return '';

    const date = new Date(value);
    
    // 1. Get parts
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();

    // 2. Add suffix
    const suffix = this.getSuffix(day);

    // Returns: "February 4th, 2026"
    return `${month} ${day}${suffix}, ${year}`;
  }

  private getSuffix(day: number): string {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return 'st';
      case 2:  return 'nd';
      case 3:  return 'rd';
      default: return 'th';
    }
  }

}
