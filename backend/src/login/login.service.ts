import { Body, Injectable, Post } from '@nestjs/common';
import { UserDto } from 'src/types/user.dto';

@Injectable()
export class LoginService {
  @Post()
  login(@Body() user: UserDto) {}
}
