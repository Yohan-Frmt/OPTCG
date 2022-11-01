import { Component, Input } from "@angular/core";

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})

export class PopupComponent  {
  @Input() public width : string = '400px';
  @Input() public height : string = '400px';
  @Input() public opened : boolean = false;

  public closePopUp() : void {
    this.opened = false;
  }
}
