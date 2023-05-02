import { IsString } from 'class-validator';

export class RqUser {
  @IsString()
  readonly username: string;
  @IsString()
  readonly password: string;
}
