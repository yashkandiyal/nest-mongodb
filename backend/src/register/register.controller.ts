import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from 'src/types/user.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}
  @Post()
  registerFunction(@Body() user: UserDto) {
    return this.registerService.registerFunction(user);
  }
}
