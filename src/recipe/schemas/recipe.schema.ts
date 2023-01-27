import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Ingredient } from 'src/ingredients/schema/ingredient.schema';
import { User } from 'src/users/schema/user.schema';

export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {
/*   @Prop({ type: Object, unique: true })
  _id: ObjectId; */

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: Object, ref: () => User })
  author: ObjectId;

  @Prop([{ type: Object, ref: () => Ingredient }])
  ingredients: Array<ObjectId>;

  @Prop()
  time: number;

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
