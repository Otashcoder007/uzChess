import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from './dtos/sign-up.dto';
import { SignInDto } from './dtos/sign-in.dto';
import { AuthService } from './services/auth.service';
import { VerifyOtpDto } from './dtos/verify-otp.dto';
import { ResendOtpDto } from './dtos/resend-otp.dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signUp(@Body() payload: SignUpDto) {
    return await this.authService.signUp(payload);
  }

  @Post('sign-in')
  async signIn(@Body() payload: SignInDto) {
    return await this.authService.signIn(payload);
  }

  @Post('verify-otp')
  async verifyOtp(@Body() payload: VerifyOtpDto) {
    return await this.authService.verifyOtp(payload);
  }

  @Post('resend-otp')
  async resendOtp(@Body() payload: ResendOtpDto) {
    return await this.authService.resendOtp(payload);
  }
}
