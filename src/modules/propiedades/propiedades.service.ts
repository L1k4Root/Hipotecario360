import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from './property.entity';
import { Repository } from 'typeorm';
import {
  CreatePropertyDto,
  UpdatePropertyDto,
} from './dto/create-property.dto';

@Injectable()
export class PropiedadesService {
  constructor(@InjectRepository(Property) private repo: Repository<Property>) {}

  create(dto: CreatePropertyDto) {
    return this.repo.save(dto);
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  findAll() {
    return this.repo.find();
  }

  update(id: number, dto: UpdatePropertyDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
