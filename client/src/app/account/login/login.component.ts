import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../core/authentication/services/authentication.service';
import { Login } from '../../core/authentication/models/login.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoading = false;

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _authentication: AuthenticationService,
  ) {
    if (this._authentication.currentUserValue())
      this._router.navigate(['/'], { replaceUrl: true });
  }

  onSubmit(form: Login): void {
    this.isLoading = true;
    this._authentication
      .login(form)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        }),
      )
      .subscribe({
        next: () => {
          this._router.navigate(
            [this._route.snapshot.queryParams['redirect'] || '/profile'],
            { replaceUrl: true },
          );
        },
        error: ({ error }: HttpErrorResponse) => {
          console.error(error.message, 'Error');
        },
      });
  }
}
