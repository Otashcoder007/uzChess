import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { OtpCode } from './entities/otpCodes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, OtpCode])],
  exports: [TypeOrmModule],
})
export class AuthModule {}
