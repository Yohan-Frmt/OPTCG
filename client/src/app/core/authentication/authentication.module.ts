import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { CredentialsService } from './services/credentials.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

@NgModule({
  providers: [
    AuthenticationService,
    CredentialsService,
    AuthenticationGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
})
export class AuthenticationModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthenticationModule) {
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. It should only be imported in your application's main module.`,
      );
    }
  }
}
