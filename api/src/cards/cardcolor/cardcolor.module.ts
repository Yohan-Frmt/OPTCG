import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardColorController } from './cardcolor.controller';
import { CardColorService } from './cardcolor.service';
import { CardColor } from './cardcolor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardColor])],
  controllers: [CardColorController],
  providers: [CardColorService],
})
export class CardColorModule {}
