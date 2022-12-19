import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { IPaginationMeta } from "../../models";

@Component({
  selector: "nav-paginate",
  templateUrl: "./nav-paginate.component.html",
  styleUrls: ["./nav-paginate.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavPaginateComponent implements OnInit, OnChanges {
  @Input() public meta!: IPaginationMeta;
  @Output() public pageSelected: EventEmitter<number> = new EventEmitter<number>();
  public arr: number[] = [];
  private _N: number = 5;

  constructor() {
  }

  ngOnChanges() {
    if (this.arr[this.arr.length - 1] === this.meta.page) {
      if (this.arr[this.arr.length - 1] === this.meta.pageCount) return;
      this.arr = this.arr
        .map((x) => x + Math.floor(this.arr.length / 2))
        .filter(x => x <= this.meta.pageCount);
    }
    if (this.arr[0] === this.meta.page) {
      if (this.arr[0] === 1) return;
      this.arr = this.arr
        .map((x) => x - Math.floor(this.arr.length / 2))
        .filter(x => x >= 1);
    }
  }

  ngOnInit(): void {
    this.arr = new Array(this._N).fill(0).map((x, i) => ++i).slice(0, 5);
  }

  public sendValue = (i: number) => {
    this.pageSelected.emit(i);
  };
}
