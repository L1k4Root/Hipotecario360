import { Module } from '@nestjs/common';
import { CreditoService } from './credito.service';
import { CreditoController } from './credito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanRequest } from './credito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoanRequest])], // 👈 Aquí puedes agregar las entidades que necesites
  controllers: [CreditoController],
  providers: [CreditoService],
  exports: [CreditoService],
})
export class CreditoModule {}
