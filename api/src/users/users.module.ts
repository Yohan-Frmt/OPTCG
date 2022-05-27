import { Module } from '@nestjs/common';
import { UserPronounModule } from './userpronoun/userpronoun.module';
import { UserCountryModule } from './usercountry/usercountry.module';
import { UserRegionModule } from './userregion/userregion.module';
import { UserStoreModule } from './userstore/userstore.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserPronounModule,
    UserCountryModule,
    UserRegionModule,
    UserStoreModule,
    UserModule,
  ],
})
export class UsersModule {}
