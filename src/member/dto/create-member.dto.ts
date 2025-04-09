import { Gender } from "@prisma/client";
import { IsBoolean, IsDate, IsString } from "class-validator";

export class CreateMemberDto {
    @IsString()
    name: string;

    @IsString()
    gender: Gender;

    @IsDate()
    birth_date: Date;

    @IsBoolean()
    banned: boolean;

    @IsDate()
    created_at: Date;
    
    @IsDate()
    updated_at: Date;
}
