import { Module } from '@nestjs/common';
import { CreditoService } from './credito.service';
import { CreditoController } from './credito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanRequest } from './credito.entity';
import { Client } from '../cliente/cliente.entity';
import { Property } from '../propiedades/property.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoanRequest, Client, Property])], // 👈 Aquí puedes agregar las entidades que necesites
  controllers: [CreditoController],
  providers: [CreditoService],
  exports: [CreditoService],
})
export class CreditoModule {}
