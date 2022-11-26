import { Module } from "@nestjs/common";
import { CardService } from "./card.service";
import { CardController } from "./card.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Card } from "./card.entity";
import { CardSubscriber } from "./card.subscriber";

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  controllers: [CardController],
  providers: [CardService, CardSubscriber]
})
export class CardModule {
}
