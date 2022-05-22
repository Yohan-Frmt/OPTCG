import { Module } from '@nestjs/common';
import { CardRarityService } from './cardrarity.service';
import { CardRarityController } from './cardrarity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardRarity } from './cardrarity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardRarity])],
  controllers: [CardRarityController],
  providers: [CardRarityService],
})
export class CardRarityModule {}
