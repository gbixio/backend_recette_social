import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShoppingListDocument = ShoppingList & Document;

@Schema()
export class ShoppingList {

  @Prop()
  ingredients: [{
    name: { type: string },
    amount: { type: number }
  }]

}

export const ShoppingListSchema = SchemaFactory.createForClass(ShoppingList);
