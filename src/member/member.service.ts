import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import mysql from 'mysql2/promise';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MemberService {
  conn: mysql.Pool;
  Db: PrismaService;

  constructor(Db: PrismaService) {
    this.Db = Db;
  }

  findAll() {
    try {
      return this.Db.member.findMany()
    } catch {
      return 'error';
    };
  }

  findOne(id: number) {
    try {
      return this.Db.member.findUnique({
        where: {
          id: id
        }
      })
    } catch {
      return 'error';
    }
  }

  create(createMemberDto: CreateMemberDto) {
    try {
      return this.Db.member.create({
        data: createMemberDto
      })
    } catch {
      return 'error';
    }
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    try {
      return this.Db.member.update({
        where: {
          id: id
        },
        data: updateMemberDto
      })
    } catch {
      return 'error';
    }
  }

  remove(id: number) {
    try {
      return this.Db.member.delete({
        where: {
          id: id
        }
      })
    } catch {
      return 'error';
    }
  }
}
