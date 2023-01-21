import { ApiProperty } from '@nestjs/swagger';

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
  username: string;
}
