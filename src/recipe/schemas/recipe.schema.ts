import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Ingredient } from 'src/ingredients/schema/ingredient.schema';
import { User } from 'src/users/schema/user.schema';

export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: [{ type: ObjectId, ref: User}];

  @Prop()
  time: number;

  @Prop()
  ingredients: [{ type: ObjectId, ref: Ingredient}];

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
