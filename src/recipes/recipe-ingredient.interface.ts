import { ObjectId } from "mongoose";

export interface RecipeIngredient{
    ingredientId:ObjectId;
    amount:number;
}