import { Test, TestingModule } from '@nestjs/testing';
import { CardattributeService } from './cardattribute.service';

describe('CardattributeService', () => {
  let service: CardattributeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardattributeService],
    }).compile();

    service = module.get<CardattributeService>(CardattributeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
