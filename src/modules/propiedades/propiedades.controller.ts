import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  CreatePropertyDto,
  UpdatePropertyDto,
} from './dto/create-property.dto';
import { PropiedadesService } from './propiedades.service';

@Controller('propiedades')
export class PropiedadesController {
  constructor(private readonly service: PropiedadesService) {}

  @Post()
  create(@Body() dto: CreatePropertyDto) {
    return this.service.create(dto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePropertyDto,
  ) {
    return this.service.update(id, dto);
  }
}
