import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './components/navbar/navbar.module';
import { AlertModule } from './components/alert/alert.module';
import { CardModule } from './components/card/card.module';
import { SkeletonModule } from './components/skeleton/skeleton.module';
import { DeckPreviewModule } from './components/deck-preview/deck-preview.module';
import { FilterModule } from './components/filter/filter.module';
import { FormFieldModule } from './components/form-field/form-field.module';
import { LogoModule } from './components/logo/logo.module';
import { SearchbarModule } from './components/searchbar/searchbar.module';
import { PipeModule } from './pipes/pipe.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ErrorDialogService } from './services/error-dialog.service';
import { PopupModule } from './components/popup/popup.module';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [
    CommonModule,
    NavbarModule,
    AlertModule,
    CardModule,
    FormFieldModule,
    LogoModule,
    FilterModule,
    SkeletonModule,
    DeckPreviewModule,
    SearchbarModule,
    PipeModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    NavbarModule,
    AlertModule,
    CardModule,
    FormFieldModule,
    LogoModule,
    FilterModule,
    SkeletonModule,
    DeckPreviewModule,
    SearchbarModule,
    PipeModule,
    ErrorDialogComponent,
    PopupModule
  ],
  providers: [ErrorDialogService],
})
export class SharedModule {}
