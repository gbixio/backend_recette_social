/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { Ingredient } from 'src/ingredients/interfaces/ingredient.interface';

export class CreateRecipeDto {
  @ApiProperty({
    example: 'tostada',
  })
  title: string;

  @ApiProperty({
    example: 'rodaja de pan tostada',
  })
  description: string;

  @ApiProperty({
    example: 'Lola',
  })
  author: ObjectId;
  
  @ApiProperty({
    example: [
      "63d0e7a3d465ce8c3453c972",
    ]
  })
  ingredients: Array<ObjectId>;

  @ApiProperty({
    example: 2,
  })
  time: number;

  @ApiProperty({
    example: ['pan', 'aceite', 'margarina', 'mermelada'],
  })
  ingredients: Array<Ingredient>;

  @ApiProperty({
    example: false,
  })
  is_private: boolean;

  @ApiProperty({
    example: ['vegana', 'fácil', 'desayuno'],
  })
  tags: Array<string>;
}
