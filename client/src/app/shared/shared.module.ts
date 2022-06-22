import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './components/navbar/navbar.module';
import { AlertModule } from './components/alert/alert.module';
import { CardModule } from './components/card/card.module';
import { SkeletonModule } from './components/skeleton/skeleton.module';
import { DeckParserPipe } from './pipes/json-parser.pipe';

@NgModule({
  declarations: [DeckParserPipe],
  imports: [
    CommonModule,
    NavbarModule,
    AlertModule,
    CardModule,
    SkeletonModule,
  ],
  exports: [
    NavbarModule,
    AlertModule,
    CardModule,
    SkeletonModule,
    DeckParserPipe,
  ],
})
export class SharedModule {}
