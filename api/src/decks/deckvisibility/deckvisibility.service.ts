import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeckVisibilityRepository } from "./deckvisibility.repository";
import { DeckVisibility } from "./deckvisibility.entity";
import { DeckVisibilityDto } from "./deckvisibility.dto";

@Injectable()
export class DeckVisibilityService {
  constructor(
    @InjectRepository(DeckVisibility) private repository: DeckVisibilityRepository
  ) {
  }

  public findAll = async (): Promise<DeckVisibility[]> => await this.repository.find();

  public create = async (card: DeckVisibilityDto): Promise<DeckVisibility> => {
    const visibilityCreated = await this.repository.create(card);
    return await this.repository.save(visibilityCreated);
  };
}
