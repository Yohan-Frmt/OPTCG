import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent implements OnInit {
  @Input() public size: number = 60;
  @Input() public path: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.path ||= '/assets/images/logo/logo-random.png';
  }
}
