import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToIterable',
})
export class NumberToIterablePipe implements PipeTransform {
  transform(value: any): any {
    const maxOfTwo = value === Infinity ? 2 : Math.min(2, value);
    return new Array(maxOfTwo).fill(value).map((x, i) => i);
  }
}
