import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUser: CreateUserDto) {
    return createUser;
  }
}
