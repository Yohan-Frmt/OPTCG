import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CardModule } from './card/card.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardSetModule } from './cardset/cardset.module';
import { CardTypeModule } from './cardtype/cardtype.module';
import { CardColorModule } from './cardcolor/cardcolor.module';

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
    CardModule,
    CardSetModule,
    CardTypeModule,
    CardColorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
