import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardStatusController } from './cardstatus.controller';
import { CardStatusService } from './cardstatus.service';
import { CardStatus } from './cardstatus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardStatus])],
  controllers: [CardStatusController],
  providers: [CardStatusService],
})
export class CardStatusModule {}
