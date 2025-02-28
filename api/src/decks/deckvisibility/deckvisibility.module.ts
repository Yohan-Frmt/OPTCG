import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeckVisibilityController } from './deckvisibility.controller';
import { DeckVisibility } from './deckvisibility.entity';
import { DeckVisibilityService } from './deckvisibility.service';

@Module({
  imports: [TypeOrmModule.forFeature([DeckVisibility])],
  controllers: [DeckVisibilityController],
  providers: [DeckVisibilityService],
})
export class DeckVisibilityModule {}
