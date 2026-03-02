import {
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    if (!request.headers.authorization) {
      return false;
    }

    const token = request.headers.authorization.split(' ')[1];

    if (!token) {
      return false;
    }

    try {
      // @ts-expect-ignore
      // request.user = this.jwtService.verify(token);
      return true;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (exc) {
      return false;
    }
  }
}
