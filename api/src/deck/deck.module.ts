import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DeckController } from "./deck.controller";
import { Deck } from "./deck.entity";
import { DeckRepository } from "./deck.repository";
import { DeckService } from "./deck.service";

@Module({
    imports: [TypeOrmModule.forFeature([Deck, DeckRepository])],
    controllers: [DeckController], providers: [DeckService]
  })
  export class DeckModule {}