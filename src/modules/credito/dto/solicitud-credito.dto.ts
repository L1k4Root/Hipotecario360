import { IsInt, Min } from 'class-validator';

export class SolicitudCreditoDto {
  @IsInt() @Min(1) clienteId: number;
  @IsInt() @Min(1) propiedadId: number;
  @IsInt() @Min(1) monto: number;
  @IsInt() @Min(12) plazo: number; // >= 1 año
}
