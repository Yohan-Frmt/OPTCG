import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss'],
})
export class FilterButtonsComponent implements OnInit {
  public selectedFilter: string[] = [];
  public filter: any;
  public type: string = '';

  @Input() public multiple: boolean = false;
  @Input() public source!: [Observable<any>, string];
  @Output() public filterSubmit: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.filter = this.source[0];
    this.type = this.source[1];
  }

  public valueSelected(selectedFilter: string): void {
    if(this.selectedFilter.includes(selectedFilter)) {
      this.selectedFilter.splice(this.selectedFilter.findIndex(x=>x == selectedFilter),1);
    } else {
      this.selectedFilter.push(selectedFilter);
    }
    this.filterSubmit.emit([this.selectedFilter, this.source[1]]);
  };
}
