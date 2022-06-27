import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './components/navbar/navbar.module';
import { AlertModule } from './components/alert/alert.module';
import { CardModule } from './components/card/card.module';
import { SkeletonModule } from './components/skeleton/skeleton.module';
import { DeckParserPipe } from './pipes/json-parser.pipe';
import { DeckPreviewModule } from './components/deck-preview/deck-preview.module';
import { FilterModule } from './components/filter/filter.module';
import { FormFieldModule } from './components/form-field/form-field.module';
import { LogoModule } from './components/logo/logo.module';
import { SearchbarModule } from './components/searchbar/searchbar.module';
import { NumberToIterablePipe } from './pipes/number-to-iterable.pipe';

@NgModule({
  declarations: [DeckParserPipe, NumberToIterablePipe],
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
    NumberToIterablePipe,
  ],
})
export class SharedModule {}
