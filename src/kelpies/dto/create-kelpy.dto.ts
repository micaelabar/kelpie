import { ApiProperty } from "@nestjs/swagger";

export class CreateKelpyDto { 
    @ApiProperty()
    name: string;

    @ApiProperty({ required: false })
    description?: string;

    @ApiProperty()
    lastSee: string;

    @ApiProperty()
    countLastSee: number;

    @ApiProperty({ required: false })
    extinct: boolean;
}