import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShoppingListDocument = ShoppingList & Document;

@Schema()
export class ShoppingList {
  @Prop()
  name: string;

  @Prop()
  measure_unit: string;

  @Prop()
  type: string;
}

export const IngredientSchema = SchemaFactory.createForClass(ShoppingList);
