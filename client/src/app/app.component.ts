import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/authentication/services/authentication.service';
import { IUser } from './shared/models/user.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'app';
  public user: IUser | null = null;

  constructor(
    private readonly _authentication: AuthenticationService,
    private readonly _router: Router,
  ) {
    this._authentication.user.subscribe((x) => (this.user = x));
  }

  ngOnInit() {
    this.printpath('', this._router.config);
  }

  printpath(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      const route = config[i];
      console.log(parent + '/' + route.path);
      if (route.children) {
        const currentPath = route.path ? parent + '/' + route.path : parent;
        this.printpath(currentPath, route.children);
      }
    }
  }
}
