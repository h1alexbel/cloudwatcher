import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { RqUser } from './rq.user';
import { UserService } from './user.service';
import { RqUpdateUser } from './rq.update.user';

@Controller('users')
export class UserController {
  constructor(private users: UserService) {
  }

  @Post()
  addUser(@Body() request: RqUser) {
    return this.users.create(request.username, request.password);
  }

  @Put('/:id')
  updateUser(@Param('id') id: number, @Body() request: RqUpdateUser) {
    return this.users.update(id, request);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.users.delete(id);
  }

  @Get('/:id')
  user(@Param('id') id: number) {
    return this.users.findOne(id);
  }

  @Get()
  userByUsername(@Query('user') username: string) {
    return this.users.find(username);
  }
}
