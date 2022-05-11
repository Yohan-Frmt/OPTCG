import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CardModule } from './card/card.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardSetModule } from './cardset/cardset.module';
import { CardTypeModule } from './cardtype/cardtype.module';
import { CardColorModule } from './cardcolor/cardcolor.module';
import { CardStatusModule } from './cardstatus/cardstatus.module';
import { CardImageModule } from './cardimage/cardimage.module';
import { CardTagModule } from './cardtag/cardtag.module';
import { CardRarityModule } from './cardrarity/cardrarity.module';
import { CardErrataModule } from './carderrata/carderrata.module';

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
    CardStatusModule,
    CardImageModule,
    CardTagModule,
    CardRarityModule,
    CardErrataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
