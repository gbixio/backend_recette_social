import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { IngredientsModule } from './ingredients/ingredients.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://admin:factoriaf5@back-recette-social.c9q8fgj.mongodb.net/LaRecette"),
    RecipesModule,
    UsersModule,
    IngredientsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
