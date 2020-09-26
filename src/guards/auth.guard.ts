import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    const query = ctx.req.body.query;
    const auth = ctx.headers.authorization;
    if (this.isSignIn(query)) {
      return true;
    }
    ctx.user = await this.validateToken(auth);
    return true;
  }

  isSignIn(query: any) {
    return query && JSON.stringify(query).includes('signIn');
  }

  async validateToken(auth: string) {
    if (!auth) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    const token = auth.split(' ')[1];
    try {
      const secret = this.configService.get('jwtSecret');
      return await jwt.verify(token, secret);
    } catch (err) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }
}
