import { Module } from '@nestjs/common';
import { CardTypeService } from './cardtype.service';
import { CardTypeController } from './cardtype.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardType } from './cardtype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardType])],
  controllers: [CardTypeController],
  providers: [CardTypeService],
})
export class CardTypeModule {}
