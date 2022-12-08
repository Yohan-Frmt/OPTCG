import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "numberToIterable"
})
export class NumberToIterablePipe implements PipeTransform {
  transform(value: number, current?: number, nFirst?: number, nLast?: number, separator?: string): (string | number)[] {
    // const firsts = arr.slice(0, Math.min(nFirst, arr.length));
    // const lasts = arr.slice(-Math.min(nLast, arr.length), arr.length);
    return new Array(value).fill(0).map((x, i) => ++i);
    // return [...firsts, separator, ...lasts];
  }
}
