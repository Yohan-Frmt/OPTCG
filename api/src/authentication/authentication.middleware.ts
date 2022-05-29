import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction } from 'express';
import { LoginUserRequestDto } from '../users/user/user.dto';
import { AuthenticationService } from './authentication.service';
import { UserService } from '../users/user/user.service';

interface AuthRequest extends Request {
  user: LoginUserRequestDto;
}

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(
    private readonly auth: AuthenticationService,
    private readonly user: UserService,
  ) {}

  public async use(req: AuthRequest, res: Response, next: NextFunction) {
    const authorization = req.headers['authorization']?.split(' ');
    if (!authorization)
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    const token = await this.auth.verifyJwtToken(authorization[1]);
    const user = await this.user.findById(token.user.id);
    console.log(user);
    if (!user) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    req.user = user;
    next();
  }
}
