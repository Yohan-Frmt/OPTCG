import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPronounModule } from './userpronoun/userpronoun.module';
import { UserCountry } from './usercountry/usercountry.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    UserPronounModule,
    UserCountry,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
