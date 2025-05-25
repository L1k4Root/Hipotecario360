import { Injectable } from '@nestjs/common';
import { SolicitudCreditoDto } from './dto/solicitud-credito.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanRequest } from './credito.entity';
import { Repository } from 'typeorm';
import { Client } from '../cliente/cliente.entity';
import { Property } from '../propiedades/property.entity';

@Injectable()
export class CreditoService {
  constructor(
    @InjectRepository(LoanRequest)
    private loanRepo: Repository<LoanRequest>,
    @InjectRepository(Client)
    private clientesRepo: Repository<Client>,
    @InjectRepository(Property)
    private propRepo: Repository<Property>,
  ) {}

  private calcDividendo(monto: number, plazo: number, tasaA: number) {
    const r = tasaA / 12;
    return Math.round((monto * r) / (1 - Math.pow(1 + r, -plazo)));
  }

  async solicitar(dto: SolicitudCreditoDto) {
    const cliente = await this.clientesRepo.findOne({
      where: { id: dto.clienteId },
    });
    const propiedad = await this.propRepo.findOne({
      where: { id: dto.propiedadId },
    });

    if (!cliente) {
      throw new Error('Cliente no encontrado');
    }
    if (!propiedad) {
      throw new Error('Propiedad no encontrada');
    }

    const dividendo = this.calcDividendo(dto.monto, dto.plazo, 0.045);
    const ratio = dividendo / cliente.ingresos;
    const estado = ratio <= 0.3 ? 'APROBADO' : 'RECHAZADO';

    const loan = this.loanRepo.create({
      monto: dto.monto,
      plazo: dto.plazo,
      ingresos: cliente.ingresos,
      deudas: cliente.deudas,
      tasaAnual: 0.045,
      dividendo,
      ratio,
      estado,
      cliente,
      propiedad,
    });
    return this.loanRepo.save(loan);
  }
}
