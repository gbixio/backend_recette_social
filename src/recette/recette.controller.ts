import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecetteService } from './recette.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { CreateUserDto } from './dto/create-user.dto'


@Controller('recette')
export class RecetteController {
  constructor(private readonly recetteService: RecetteService) {}

  // La Recette DB CRUD de recetas

  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recetteService.create(createRecipeDto);
  }

  @Get()
  findAll() {
    return this.recetteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recetteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecetteDto: UpdateRecipeDto) {
    return this.recetteService.update(+id, updateRecetteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recetteService.remove(+id);
  }

  // CRUD de usuarios
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.
  }
}
