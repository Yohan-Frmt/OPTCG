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
import { UserPronounModule } from './userpronoun/userpronoun.module';
import { UserModule } from './user/user.module';
import { UserCountryModule } from './usercountry/usercountry.module';
import { UserRegionModule } from './userregion/userregion.module';
import { UserStoreModule } from './userstore/userstore.module';
import { DeckVisibilityModule } from './deckvisibility/deckvisibility.module';
import { DeckModule } from './deck/deck.module';
import * as options from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(options),
    CardModule,
    CardSetModule,
    CardTypeModule,
    CardColorModule,
    CardStatusModule,
    CardImageModule,
    CardTagModule,
    CardRarityModule,
    CardErrataModule,
    UserPronounModule,
    UserCountryModule,
    UserRegionModule,
    UserStoreModule,
    UserModule,
    DeckVisibilityModule,    
    DeckModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
