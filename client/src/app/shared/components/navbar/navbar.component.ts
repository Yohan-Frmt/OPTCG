import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { AuthenticationService } from '../../../core/authentication/services/authentication.service';
import { INavbarLinks, IUser } from '../../models';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit, DoCheck {
  public user: IUser | null = null;
  public items: INavbarLinks[] = [];
  public accounts: INavbarLinks[] = [];
  public brand: INavbarLinks | null = null;

  public routes: INavbarLinks[] = [
    {
      path: '',
      title: 'Brand (pas le perso de LoL)',
      type: 'brand',
      image: 'assets/images/logo/logo.png',
    },
    { path: 'deckbuilder', title: 'Deckbuilder', type: 'item' },
    { path: 'auth/register', title: 'Register', type: 'account' },
    { path: 'auth/login', title: 'Login', type: 'account' },
    { path: 'cards', title: 'Cards', type: 'item' },
    { path: 'decks', title: 'Decks', type: 'item' },
  ];

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _alert: AlertService,
    private readonly _router: Router,
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

  public redirectToHome = () => {
    this._router.navigate(['/']);
  };

  public logout = () => {
    this._authentication.logout().subscribe((_) => {});
  };
}
