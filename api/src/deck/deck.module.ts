import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DeckController } from "./deck.controller";
import { Deck } from "./deck.entity";
import { DeckService } from "./deck.service";

@Module({
    imports: [TypeOrmModule.forFeature([Deck])],
    controllers: [DeckController], providers: [DeckService]
  })
  export class DeckModule {}