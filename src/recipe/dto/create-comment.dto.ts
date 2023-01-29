/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/schema/user.schema';

export class CreateCommentDto {
  @ApiProperty({ example: 'Me encantó' })
  readonly title: string;

  @ApiProperty({
    example: 3,
  })
  readonly stars: number;

  @ApiProperty({
    example:
      'El resultado final es maravilloso, he podido disfrutar esta receta acompañada de vino y la mezcla de sabores es increible.',
  })
  readonly comment: string;

  @ApiProperty({ example: 'SatyaBlue' })
  readonly username: User;
}