import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { IUser } from '../../models/user.model';
import { AuthenticationService } from '../../../core/authentication/services/authentication.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit, DoCheck {
  public user: IUser | null = null;
  public items: any[] = [];
  public accounts: any[] = [];
  public brand: any = null;

  public routes = [
    { path: '', title: 'Brand (pas le perso de LoL)', type: 'brand' },
    { path: 'auth/register', title: 'Register', type: 'account' },
    { path: 'auth/login', title: 'Login', type: 'account' },
    { path: 'cards', title: 'Cards', type: 'item' },
  ];

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _alert: AlertService,
  ) {}

  ngOnInit(): void {
    this.user = this._authentication.currentUserValue();
    this.items = this.routes.filter((item) => item.type === 'item');
    this.accounts = this.routes.filter((item) => item.type === 'account');
    this.brand = this.routes.filter((item) => item.type === 'brand')[0];
  }

  ngDoCheck(): void {
    this.user = this._authentication.currentUserValue();
  }

  public logout = () => {
    this._authentication.logout().subscribe();
  };
}
