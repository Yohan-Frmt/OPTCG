import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationService } from './authentication.service';
import * as bcrypt from 'bcrypt';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthenticationService],
    }).compile();

    service = module.get<AuthenticationService>(AuthenticationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call hash method', () => {
    const spy = jest.spyOn(bcrypt, 'hash');
    service.hash('test');
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('test', 10);
  });

  it('should call compare method', () => {
    const spy = jest.spyOn(bcrypt, 'compare');
    service.compare('test', 'test');
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('test', 'test');
  });
});
