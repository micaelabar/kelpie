import { Module } from '@nestjs/common';
import { KelpiesService } from './kelpies.service';
import { KelpiesController } from './kelpies.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [KelpiesController],
  providers: [KelpiesService],
  imports: [PrismaModule],
})
export class KelpiesModule {}
