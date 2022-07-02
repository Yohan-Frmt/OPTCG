import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  public selectedFilter: string = '';
  public filter: any;
  public type: string = '';

  @Input() public multiple: boolean = false;
  @Input() public source!: [Observable<any>, string];
  @Output() public filterSubmit: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.filter = this.source[0];
    this.type = this.source[1];
  }

  public valueSelected = () => {
    this.filterSubmit.emit([this.selectedFilter, this.source[1]]);
  };
}
