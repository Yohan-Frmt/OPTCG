import { Module } from '@nestjs/common';
import { CardTagService } from './cardtag.service';
import { CardTagController } from './cardtag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardTag } from './cardtag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardTag])],
  controllers: [CardTagController],
  providers: [CardTagService],
})
export class CardTagModule {}
