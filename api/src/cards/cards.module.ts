import { Module } from '@nestjs/common';
import { CardModule } from './card/card.module';
import { CardSetModule } from './cardset/cardset.module';
import { CardTypeModule } from './cardtype/cardtype.module';
import { CardColorModule } from './cardcolor/cardcolor.module';
import { CardStatusModule } from './cardstatus/cardstatus.module';
import { CardImageModule } from './cardimage/cardimage.module';
import { CardTagModule } from './cardtag/cardtag.module';
import { CardRarityModule } from './cardrarity/cardrarity.module';
import { CardErrataModule } from './carderrata/carderrata.module';
import { CardAttributeModule } from './cardattribute/cardattribute.module';

@Module({
  imports: [
    CardModule,
    CardSetModule,
    CardTypeModule,
    CardColorModule,
    CardStatusModule,
    CardImageModule,
    CardTagModule,
    CardRarityModule,
    CardErrataModule,
    CardAttributeModule,
  ],
})
export class CardsModule {}
