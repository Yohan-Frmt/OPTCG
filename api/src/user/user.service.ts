import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserRequestDto } from './user.dto';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly authenticationService: AuthenticationService,
  ) {}

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async create(createUser: CreateUserRequestDto): Promise<User> {
    const userExists = await this.userRepository.findOne({
      where: { email: createUser.email },
    });
    if (userExists)
      throw new HttpException(
        'Email is already in use',
        HttpStatus.I_AM_A_TEAPOT,
      );
    createUser.password = await this.authenticationService.hash(
      createUser.password,
    );
    const user = await this.userRepository.save(
      this.userRepository.create(createUser),
    );
    return this.userRepository.findOne(user.id);
  }
}
