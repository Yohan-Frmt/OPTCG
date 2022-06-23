import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { JwtService } from '@nestjs/jwt';

interface IJsonWebTokenRequest extends Request {
  locals: {
    [key: string]: any;
  };
}

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(protected readonly _jwt: JwtService) {}

  public async use(
    req: IJsonWebTokenRequest,
    res: Response,
    next: NextFunction,
  ) {
    req.locals = req.locals || {};
    req.locals.user = null;
    const token: string | null = req.headers['authorization']?.split(' ')[1];
    if (!token)
      throw new HttpException('Token is invalid', HttpStatus.UNAUTHORIZED);
    try {
      await this._jwt.verifyAsync(token);
      const decodedToken: any = this._jwt.decode(token, { complete: true });
      req.locals.user = decodedToken.payload.user;
      next();
    } catch (error) {
      throw new HttpException(
        'Token is expired or invalid',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
