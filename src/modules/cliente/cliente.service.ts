import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './cliente.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Client)
    private repo: Repository<Client>,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    const hash = await bcrypt.hash(createClienteDto.password, 10);

    const cliente = this.repo.create({
      ...createClienteDto,
      passwordHash: hash,
    });

    return this.repo.save(cliente);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  update(id: number, dto: UpdateClienteDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
