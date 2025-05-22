import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from './property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/create-property.dto';

@Injectable()
export class PropiedadesService {
  constructor(@InjectRepository(Property) private repo: Repository<Property>) {}

  create(dto: CreatePropertyDto) {
    return this.repo.save(dto);
  }

  findAll() {
    return this.repo.find();
  }
}
