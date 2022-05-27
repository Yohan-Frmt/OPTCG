import { Module } from '@nestjs/common';
import { UserRegionController } from './userregion.controller';
import { UserRegionService } from './userregion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRegion } from './userregion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRegion])],
  controllers: [UserRegionController],
  providers: [UserRegionService],
})
export class UserRegionModule {}
