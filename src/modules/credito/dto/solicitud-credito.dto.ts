import { IsInt, Min } from 'class-validator';

export class SolicitudCreditoDto {
  @IsInt() @Min(1) monto: number;
  @IsInt() @Min(1) plazo: number;
  @IsInt() @Min(1) ingresos: number;
  @IsInt() @Min(0) deudas: number;
}
