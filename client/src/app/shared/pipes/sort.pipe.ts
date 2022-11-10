import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {
  transform<T>(array: T, field: string): T {
    if (!array || !Array.isArray(array)) return array;
    return array.sort((a: any, b: any) => (a[field] > b[field] ? 1 : -1));
  }
}
