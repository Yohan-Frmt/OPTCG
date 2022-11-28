import { Pipe, PipeTransform } from "@angular/core";

export type SortOrder = "asc" | "desc";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {
  transform<T>(array: T, sortOrder: SortOrder | string = "asc", sortKey?: string): T {
    sortOrder = sortOrder && (sortOrder.toLowerCase() as any);
    if (!array || !Array.isArray(array) || sortOrder !== "asc" && sortOrder !== "desc") return array;
    let numbers: any[];
    let strings: any[];
    if (!sortKey) {
      numbers = array.filter(item => typeof item === "number").sort();
      strings = array.filter(item => typeof item === "string").sort();
    } else {
      numbers = array.filter(item => typeof item[sortKey] === "number").sort((a, b) => a[sortKey] - b[sortKey]);
      strings = array.filter(item => typeof item[sortKey] === "string").sort((a, b) => a[sortKey] < b[sortKey] ? -1 : a[sortKey] > b[sortKey] ? 1 : 0);
    }
    const sorted = numbers.concat(strings);
    return sortOrder === "asc" ? sorted as unknown as T : sorted.reverse() as unknown as T;
  }
}
