import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmpty } from 'class-validator';
import { HydratedDocument } from 'mongoose';
import { UserDto } from 'src/types/user.dto';
export type UserDocument = HydratedDocument<UserDto>;
@Schema()
export class User {
  @Prop({ required: true })
  @IsEmpty()
  name: string;

  @Prop({ required: true })
  @IsEmpty()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
