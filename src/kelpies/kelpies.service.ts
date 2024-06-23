import { Injectable } from '@nestjs/common';
import { CreateKelpyDto } from './dto/create-kelpy.dto';
import { UpdateKelpyDto } from './dto/update-kelpy.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KelpiesService {
  constructor(private prisma: PrismaService) {}

  create(createKelpyDto: CreateKelpyDto) {
    return `This action returns all kelpies`;
  }

  findAllAlive() {
    return this.prisma.kelpie.findMany({
      where: { extinct: false },
    });
  }

  findAllExtinct() {
    return this.prisma.kelpie.findMany({
      where: { extinct: true },
    });
  }

  findOne(id: number) {
    return this.prisma.kelpie.findUnique({
      where: { id },
    });
  }

  update(id: number, updateRockDto: UpdateKelpyDto) {
    return this.prisma.rock.update({
      where: {id},
      data: UpdateKelpyDto,
    });
  }

  remove(id: number) {
    return this.prisma.kelpie.delete({
      where: { id },
    });
  }
}
