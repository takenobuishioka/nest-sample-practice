import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class UsersService {
  users: CreateUserDto[] = [];
  create(user: CreateUserDto) {
    this.users.push(user);
  }
  findAll() {
    return this.users;
  }
}
