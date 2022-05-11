import { Test, TestingModule } from '@nestjs/testing';
import { CardColorService } from './cardcolor.service';

describe('CardColorService', () => {
  let service: CardColorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardColorService],
    }).compile();

    service = module.get<CardColorService>(CardColorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
