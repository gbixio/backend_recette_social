import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRecetteDto } from './dto/create-recette.dto';
import { UpdateRecetteDto } from './dto/update-recette.dto';
import { Receta, RecetaDocument } from './schemas/receta.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecetteService {
  constructor(
    @InjectModel(Receta.name) private readonly recetaModel:
    Model<RecetaDocument>
  ){}

  create(createRecetteDto: CreateRecetteDto) {
    return this.recetaModel.create(createRecetteDto);
  }

  findAll() {
    return this.recetaModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} recette`;
  }

  update(id: number, updateRecetteDto: UpdateRecetteDto) {
    return `This action updates a #${id} recette`;
  }

  remove(id: number) {
    return `This action removes a #${id} recette`;
  }
}
