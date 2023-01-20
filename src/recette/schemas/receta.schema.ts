import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RecetaDocument = Receta & Document;

@Schema()
export class Receta {
    @Prop()
    title: string;
    
    @Prop()
    description: string;

    @Prop()
    author: string;
}

export const RecetaSchema = SchemaFactory.createForClass(Receta);