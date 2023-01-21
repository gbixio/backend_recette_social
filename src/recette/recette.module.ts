import { Module } from '@nestjs/common';
import { RecetteService } from './recette.service';
import { RecetteController } from './recette.controller';
import { Recipe, RecipeSchema } from './schemas/recipe.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Recipe.name,
      schema: RecipeSchema
    }])
  ],
  controllers: [RecetteController],
  providers: [RecetteService]
})
export class RecetteModule {}
