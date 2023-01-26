import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { RecipeIngredient } from '../recipe-ingredient.interface';


export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {@Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  username: string;

  @Prop()
  time: number;

  @Prop()
  ingredients: Array<RecipeIngredient>;

  @Prop()
  is_private: boolean;
  
  @Prop()
  tags: Array<string>;

  @Prop()
  score: number;

  @Prop()
  views: number;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
