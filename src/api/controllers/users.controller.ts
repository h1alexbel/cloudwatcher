import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { RqUser } from '../rq/rq.user';

@Controller('users')
export class UsersController {

  @Get()
  users() {

  }

  @Post()
  addUser(@Body() request: RqUser) {
    console.log(request);

  }

  @Get('/:id')
  user(@Param('id') id: number) {
    if (!id) {
      throw new NotFoundException('user not found with id %s');
    }
    console.log(id);
  }
}
