import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsString, Matches, Min } from 'class-validator';

// modules/propiedades/dto/create-property.dto.ts
export class CreatePropertyDto {
  @IsString() direccion: string;
  @Matches(/^\d+-\d+$/) rol: string;
  @IsInt() @Min(1) valorTasado: number;
  @IsString() comuna: string;
  @IsString() region: string;
}
export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {}
