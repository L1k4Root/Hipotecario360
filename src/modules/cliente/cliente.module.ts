import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { Client } from './cliente.entity';
import { LoanRequest } from '../credito/credito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client, LoanRequest])],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
