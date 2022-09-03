import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  public search: string = '';
  @Output() public searchSubmit: EventEmitter<any> = new EventEmitter<any>();

  public submit = () => {
    this.searchSubmit.emit([this.search, 'search']);
  };
}
