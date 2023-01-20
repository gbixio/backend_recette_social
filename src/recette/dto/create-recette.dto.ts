import { ApiProperty } from "@nestjs/swagger";
export class CreateRecetteDto {

    @ApiProperty({
        example: "tostada"
    })
    title: string;

    @ApiProperty({
        example: "rodaja de pan tostada"
    })
    description: string;

    @ApiProperty({
        example: "Lola"
    })
    author: string;
}
