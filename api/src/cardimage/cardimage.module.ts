import { Module } from '@nestjs/common';
import { CardImageService } from './cardimage.service';
import { CardImageController } from './cardimage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardImage } from './cardimage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardImage])],
  controllers: [CardImageController],
  providers: [CardImageService],
})
export class CardImageModule {}
