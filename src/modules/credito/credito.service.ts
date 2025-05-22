import { Injectable } from '@nestjs/common';

@Injectable()
export class CreditoService {
  simulate(income: number, debts: number, monto: number, plazo: number) {
    const tasa = 0.045; // 4,5 % anual fija
    // Fórmula francesa: dividendo = monto * (tasa / 12) / (1 - Math.pow(1 + tasa / 12, -plazo))
    const monthlyRate = tasa / 12;
    const dividendo =
      (monto * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -plazo));
    const ratio = dividendo / income;
    return { aprobado: ratio <= 0.3, dividendo, ratio };
  }
}