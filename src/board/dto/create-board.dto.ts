import { IsNotEmpty } from "class-validator";
//들어갈값
export class CreateBoardDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
} 