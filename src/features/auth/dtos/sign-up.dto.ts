import { LoginType } from '../../../core/enums/loginType';
import { IsEnum, IsString } from 'class-validator';

export class SignUpDto {
  @IsString()
  fullName: string;

  @IsString()
  login: string;

  @IsEnum(LoginType)
  loginType: LoginType;
}
