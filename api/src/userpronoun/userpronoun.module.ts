import { Module } from '@nestjs/common';
import { UserPronounController } from './userpronoun.controller';
import { UserPronounService } from './userpronoun.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPronoun } from './userpronoun.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserPronoun])],
  controllers: [UserPronounController],
  providers: [UserPronounService],
})
export class UserPronounModule {}
