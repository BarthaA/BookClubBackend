import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberDto } from './create-member.dto';
import { Gender } from '@prisma/client';

export class UpdateMemberDto extends PartialType(CreateMemberDto) {
    name?: string;
    gender?: Gender;
    birth_date?: Date;
    banned?: boolean;
    created_at?: Date;
    updated_at?: Date;
}
