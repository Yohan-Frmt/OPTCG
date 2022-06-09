import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SkeletonModule } from './shared/components/skeleton/skeleton.module';
import { AccountModule } from './account/account.module';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './shared/components/alert/alert.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AlertComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SkeletonModule,
    AccountModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
