import { Injectable, BadRequestException } from '@nestjs/common';
import { SolicitudCreditoDto } from './dto/solicitud-credito.dto';

@Injectable()
export class CreditoService {
  /** Tasa de interés anual fija, centralizada para fácil ajuste */
  private readonly ANNUAL_RATE = 0.045;

  /**
   * Simula la aprobación de un crédito hipotecario usando la fórmula francesa.
   * @param dto SolicitudCreditoDto - Datos de la solicitud de crédito
   * @returns Resultado de la simulación, con estado de aprobación, dividendo mensual y ratio.
   */
  simulate(dto: SolicitudCreditoDto) {
    const { ingresos, deudas, monto, plazo } = dto;

    // Validaciones básicas
    if (ingresos <= 0)
      throw new BadRequestException('Ingresos debe ser mayor a 0');
    if (monto <= 0) throw new BadRequestException('Monto debe ser mayor a 0');
    if (plazo <= 0) throw new BadRequestException('Plazo debe ser mayor a 0');
    if (deudas < 0)
      throw new BadRequestException('Deudas no puede ser negativa');

    // Considera deudas en el cálculo de ingreso disponible
    const ingresoDisponible = ingresos - deudas;

    const monthlyRate = this.ANNUAL_RATE / 12;
    const dividendo =
      (monto * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -plazo));

    const ratio = dividendo / ingresoDisponible;
    const aprobado = ratio <= 0.3;

    return {
      aprobado,
      dividendo: Math.round(dividendo),
      ratio: parseFloat(ratio.toFixed(3)),
      ingresoDisponible,
      mensaje: aprobado
        ? 'La solicitud cumple con los requisitos de endeudamiento.'
        : 'El dividendo supera el 30% del ingreso disponible.',
    };
  }
}
