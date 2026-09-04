import { DecimalAmount, MonedaBimoneda, SEED_CONFIG } from '../types/common.types';

export class VolatilityEngine {
  public static calcularTasaEfectiva(
    tasaBCV: DecimalAmount = SEED_CONFIG.tasas.tasaBcvOficial,
    colchonPorcentaje: number = SEED_CONFIG.tasas.colchonVolatilidadPorcentaje
  ): DecimalAmount {
    const tasaConColchon = tasaBCV * (1 + colchonPorcentaje);
    return Number(tasaConColchon.toFixed(4));
  }

  public static convertirUSDToVES(
    montoUSD: DecimalAmount,
    tasaBCV: DecimalAmount = SEED_CONFIG.tasas.tasaBcvOficial
  ): MonedaBimoneda {
    const tasaAplicada = this.calcularTasaEfectiva(tasaBCV);
    const montoVES = Number((montoUSD * tasaAplicada).toFixed(4));

    return {
      montoUSD,
      montoVES,
      tasaAplicada,
      fechaTasa: new Date().toISOString()
    };
  }

  public static convertirVESToUSD(
    montoVES: DecimalAmount,
    tasaBCV: DecimalAmount = SEED_CONFIG.tasas.tasaBcvOficial
  ): MonedaBimoneda {
    const tasaAplicada = this.calcularTasaEfectiva(tasaBCV);
    const montoUSD = Number((montoVES / tasaAplicada).toFixed(4));

    return {
      montoUSD,
      montoVES,
      tasaAplicada,
      fechaTasa: new Date().toISOString()
    };
  }
}