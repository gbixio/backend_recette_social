import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { IngredientsModule } from './ingredients/ingredients.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/LaRecetteSocial"),
    RecipeModule,
    UsersModule,
    IngredientsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
