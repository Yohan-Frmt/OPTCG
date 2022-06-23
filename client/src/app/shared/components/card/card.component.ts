import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input()
  public size: number = 0;

  @Input()
  public card: any;

  public path: string = '';
  public alt: string = '';

  constructor(private readonly _router: Router) {}

  ngOnInit() {
    this.size ||= 150;
    this.path = 'assets/images/' + this.card.images[0].path;
    this.alt = this.card.en_name || 'card';
  }

  @HostListener('click')
  public onClick() {
    this._router.navigate(['/cards', this.card.serial_number]);
  }
}
