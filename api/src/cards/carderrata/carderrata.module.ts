import { Module } from '@nestjs/common';
import { CardErrataService } from './carderrata.service';
import { CardErrataController } from './carderrata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardErrata } from './carderrata.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardErrata])],
  controllers: [CardErrataController],
  providers: [CardErrataService],
})
export class CardErrataModule {}
