// import {
//   CanActivate,
//   ExecutionContext,
//   Injectable,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { Observable } from 'rxjs';
//
// @Injectable()
// export class RoleGuard implements CanActivate {
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const req = context.switchToHttp().getRequest<Request>();
//     const metadata = new Reflector();
//   }
// }
