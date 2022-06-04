import { forwardRef, Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UserModule } from '../users/user/user.module';
import { AuthenticationController } from './authentication.controller';
import { SharedModule } from '../shared/shared.module';
import { JwtStrategy } from '../shared/strategy/jwt.strategy';

@Module({
  imports: [forwardRef(() => UserModule), forwardRef(() => SharedModule)],
  providers: [AuthenticationService, JwtStrategy],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
