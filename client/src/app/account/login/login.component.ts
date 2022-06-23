import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../core/authentication/services/authentication.service';
import { ILogin } from '../../core/authentication/models';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public isLoading = false;

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _authentication: AuthenticationService,
    private readonly _alert: AlertService,
  ) {
    if (this._authentication.currentUserValue())
      this._router.navigate(['/'], { replaceUrl: true });
  }

  public onSubmit = (form: ILogin): void => {
    this.isLoading = true;
    this._alert.clear();
    this._authentication
      .login(form)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        }),
      )
      .subscribe({
        next: () => {
          this._alert.success('Login successful', { keep: true });
          this._router.navigate([''], { relativeTo: this._route });
        },
        error: ({ error }: HttpErrorResponse) => {
          this._alert.error('Error : ' + error.message);
        },
      });
  };
}
