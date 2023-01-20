import { Module } from '@nestjs/common';
import { RecetteService } from './recette.service';
import { RecetteController } from './recette.controller';
import { Receta, RecetaSchema } from './schemas/receta.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Receta.name,
      schema: RecetaSchema
    }])
  ],
  controllers: [RecetteController],
  providers: [RecetteService]
})
export class RecetteModule {}
