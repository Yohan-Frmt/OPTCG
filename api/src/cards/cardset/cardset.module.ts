import { Module } from '@nestjs/common';
import { CardSetService } from './cardset.service';
import { CardSetController } from './cardset.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardSet } from './cardset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardSet])],
  controllers: [CardSetController],
  providers: [CardSetService],
})
export class CardSetModule {}
