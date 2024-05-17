import { Body, Injectable, Post } from '@nestjs/common';
import { UserDto } from 'src/types/user.dto';
import * as bcrypt from 'bcrypt';
import { User, UserSchema } from 'src/schemas/user.schema';

@Injectable()
export class RegisterService {
  registerFunction(user: UserDto) {
    //Step 1: Hash the password given by the user
    const saltRounds = 10;
    const myPlaintextPassword = user.password;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(myPlaintextPassword, salt);

    return { ...user, password: hashedPassword };
  }
}
