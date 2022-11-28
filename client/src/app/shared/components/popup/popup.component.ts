import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"]
})

export class PopupComponent {
  @Input() public width: string = "400px";
  @Input() public height: string = "400px";
  @Input() public opened: boolean = false;
  @Output() public closed: EventEmitter<boolean> = new EventEmitter<boolean>();

  public closePopUp(): void {
    this.opened = false;
    this.closed.emit(false);
  }
}
