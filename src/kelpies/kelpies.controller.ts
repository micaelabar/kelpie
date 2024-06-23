import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KelpiesService } from './kelpies.service';
import { CreateKelpyDto } from './dto/create-kelpy.dto';
import { UpdateKelpyDto } from './dto/update-kelpy.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('kelpies')
@ApiTags('kelpies')
export class KelpiesController {
  constructor(private readonly kelpiesService: KelpiesService) {}

  @Post()
  create(@Body() createKelpyDto: CreateKelpyDto) {
    return this.kelpiesService.create(createKelpyDto);
  }


  @Get()
  findAll() {
    return this.kelpiesService.findAllAlive();
  }

  @Get('extinct')
  findAllExtinct() {
    return this.kelpiesService.findAllExtinct();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kelpiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKelpyDto: UpdateKelpyDto) {
    return this.kelpiesService.update(+id, updateKelpyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kelpiesService.remove(+id);
  }
}
