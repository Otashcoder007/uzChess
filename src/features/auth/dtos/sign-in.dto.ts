import { IsString, Length } from 'class-validator';

export class SignInDto {
  @IsString()
  @Length(5, 64)
  login!: string;

  @IsString()
  @Length(5, 64)
  password: string;
}
