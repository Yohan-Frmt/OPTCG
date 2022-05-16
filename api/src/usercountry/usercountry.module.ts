import { Module } from '@nestjs/common';
import { UserCountryController } from './usercountry.controller';
import { UserCountryService } from './usercountry.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCountry } from './usercountry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserCountry])],
  controllers: [UserCountryController],
  providers: [UserCountryService],
})
export class UserCountryModule {}
