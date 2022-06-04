import { User } from '../../users/user/user.entity';

export interface PayloadDto {
  sub: () => string;
  email?: string;
  type: string;
  user?: User;
}
