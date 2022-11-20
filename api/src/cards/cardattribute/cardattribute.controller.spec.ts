import { Test, TestingModule } from "@nestjs/testing";
import { CardAttributeController } from "./cardattribute.controller";

describe("CardattributeController", () => {
  let controller: CardAttributeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardAttributeController]
    }).compile();

    controller = module.get<CardAttributeController>(CardAttributeController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
