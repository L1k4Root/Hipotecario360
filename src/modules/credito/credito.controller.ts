import { Body, Controller, Post } from '@nestjs/common';
import { CreditoService } from './credito.service';
import { SolicitudCreditoDto } from './dto/solicitud-credito.dto';

@Controller('credito')
export class CreditoController {
  constructor(private readonly service: CreditoService) {}

  @Post('simulate')
  simulate(@Body() dto: SolicitudCreditoDto) {
    return this.service.simulate(dto);
  }
}
