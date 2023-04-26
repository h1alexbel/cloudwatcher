import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RqUser } from './rq.user';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private users: UserService) {
  }

  @Post()
  addUser(@Body() request: RqUser) {
    this.users.create(request.username, request.password);
  }

  @Put('/:id')
  updateUser(@Param('id') id: number) {
    console.log(id);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    console.log(id);
  }

  @Get()
  allUsers() {
    console.log('all users');
  }

  @Get('/:id')
  user(@Param('id') id: number) {
    console.log(id);
  }
}
