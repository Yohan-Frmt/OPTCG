import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from '../../models';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() public fromDeckbuilder: boolean = false;
  @Input() public size: number = 200;
  @Input() public card!: ICard | null;
  @Input() public path: string = '';
  @Input() public deckId!: string;
  public alt: string = '';

  constructor(private readonly _router: Router) {}

  ngOnInit() {
    if (!this.card) return;
    this.size ||= 150;
    this.path ||=
      'assets/images/cards' +
      this.card.serial_number.split('-')[0] +
      '/' +
      this.card.images[0].path;
    this.alt = this.card.en_name || 'card';
  }

  @HostListener('click')
  public onClick() {
    if (this.fromDeckbuilder) return;
    if (this.deckId) {
      this._router.navigate(['/decks', this.deckId]);
    } else {
      this._router.navigate(['/cards', this.card!.serial_number]);
    }
  }
}
