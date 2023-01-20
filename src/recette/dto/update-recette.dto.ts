import { PartialType } from '@nestjs/swagger';
import { CreateRecetteDto } from './create-recette.dto';

export class UpdateRecetteDto extends PartialType(CreateRecetteDto) {}
