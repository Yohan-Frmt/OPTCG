import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SkeletonModule } from './shared/components/skeleton/skeleton.module';
import { AccountModule } from './account/account.module';
import { HomeComponent } from './home/home.component';
import { AlertModule } from './shared/components/alert/alert.module';
import { CardModule } from './shared/components/card/card.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SkeletonModule,
    AccountModule,
    NavbarModule,
    AlertModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
