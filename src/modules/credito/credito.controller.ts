import { Body, Controller, Post } from '@nestjs/common';
import { CreditoService } from './credito.service';
import { SolicitudCreditoDto } from './dto/solicitud-credito.dto';

@Controller('credito')
export class CreditoController {
  constructor(private readonly service: CreditoService) {}

  @Post('solicitar')
  simulate(@Body() dto: SolicitudCreditoDto) {
    const { ingresos, deudas, monto, plazo } = dto;
    return this.service.simulate(ingresos, deudas, monto, plazo);
  }
}
