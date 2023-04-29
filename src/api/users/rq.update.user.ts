import { IsOptional, IsString } from 'class-validator';

export class RqUpdateUser {

  @IsString()
  @IsOptional()
  username: string;
  @IsString()
  @IsOptional()
  password: string;
}
