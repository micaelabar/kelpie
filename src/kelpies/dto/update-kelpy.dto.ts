import { PartialType } from '@nestjs/mapped-types';
import { CreateKelpyDto } from './create-kelpy.dto';

export class UpdateKelpyDto extends PartialType(CreateKelpyDto) {}
