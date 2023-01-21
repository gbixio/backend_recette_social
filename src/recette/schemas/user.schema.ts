/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  user_name: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  shopping_list: [
    ingredient_name: string,
    ingredient_qty: number,
    ingredient_unit: string,
  ];

  @Prop()
  favourites: object;
}

export const UserSchema = SchemaFactory.createForClass(User);
