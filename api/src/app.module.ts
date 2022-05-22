import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPronounModule } from './userpronoun/userpronoun.module';
import { UserModule } from './user/user.module';
import { UserCountryModule } from './usercountry/usercountry.module';
import { UserRegionModule } from './userregion/userregion.module';
import { UserStoreModule } from './userstore/userstore.module';
import * as options from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(options),
    UserPronounModule,
    UserCountryModule,
    UserRegionModule,
    UserStoreModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
