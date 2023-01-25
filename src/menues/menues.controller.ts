import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuesService } from './menues.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('menues')
export class MenuesController {
  constructor(private readonly menuesService: MenuesService) {}

  @Post()
  async create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuesService.create(createMenuDto);
  }

  @Get()
  async findAll() {
    return this.menuesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.menuesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuesService.update(+id, updateMenuDto);
  }

  @Patch(':id')
  async addItem(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuesService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.menuesService.remove(+id);
  }
}
