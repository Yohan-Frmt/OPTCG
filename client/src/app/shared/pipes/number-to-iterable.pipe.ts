import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "numberToIterable"
})
export class NumberToIterablePipe implements PipeTransform {
  transform(value: number, current: number, nFirst: number = 5, nLast: number = 5, separator: string = "..."): any[] {
    const arr = new Array(value).fill(0).map((x, i) => ++i);
    const firsts = arr.slice(0, Math.min(nFirst, arr.length));
    const lasts = arr.slice(-Math.min(nLast, arr.length), arr.length);
    return firsts.includes(current) || lasts.includes(current) ?
      [...firsts, separator, ...lasts] :
      [...firsts, { separator, type: "prev" }, current, { separator, type: "next" }, ...lasts];
  }
}
