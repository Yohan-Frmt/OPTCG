import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardAttributeController } from './cardattribute.controller';
import { CardAttributeService } from './cardattribute.service';
import { CardAttribute } from './cardattribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardAttribute])],
  controllers: [CardAttributeController],
  providers: [CardAttributeService],
})
export class CardAttributeModule {}
