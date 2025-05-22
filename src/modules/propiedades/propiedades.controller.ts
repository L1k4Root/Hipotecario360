import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { PropiedadesService } from './propiedades.service';

@Controller('propiedades')
export class PropiedadesController {
  constructor(private readonly service: PropiedadesService) {}

  @Post()
  create(@Body() dto: CreatePropertyDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
