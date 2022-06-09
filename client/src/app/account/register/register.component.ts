import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../core/authentication/services/authentication.service';
import { AlertService } from '../../shared/services/alert.service';
import { Register } from '../../core/authentication/models/register.model';
import { finalize } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isLoading = false;

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _authentication: AuthenticationService,
    private readonly _alert: AlertService,
  ) {
    if (this._authentication.currentUserValue())
      this._router.navigate(['/'], { replaceUrl: true });
  }

  public onSubmit = (form: Register): void => {
    this.isLoading = true;
    this._authentication
      .register(form)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        }),
      )
      .subscribe({
        next: () => {
          this._alert.success('Registration successful', { keep: true });
          this._router.navigate(
            [this._route.snapshot.queryParams['redirect'] || '/'],
            { replaceUrl: true },
          );
        },
        error: ({ message }: HttpErrorResponse) => {
          console.error(message, 'Error');
          this._alert.error(message);
        },
      });
  };
}
