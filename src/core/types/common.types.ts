// ============================================================================
// PROVENDOR 2026 - UNIVERSAL DATA CONTRACT & SEED
// ============================================================================

export type ThemeMode = 'light' | 'dark-gold';
export type DecimalAmount = number;

export interface MonedaBimoneda {
  montoUSD: DecimalAmount;
  montoVES: DecimalAmount;
  tasaAplicada: DecimalAmount;
  fechaTasa: string;
}

export interface UMIJerarquia {
  nivel1MasterNombre: string;
  nivel1ContenidoEnN2: number;
  nivel2CajaNombre: string;
  nivel2ContenidoEnN3: number;
  nivel3CajetillaNombre: string;
  nivel3ContenidoEnN4: number;
  nivel4UmiNombre: string;
}

export interface SeniatConfig {
  rifEmpresa: string;
  razonSocial: string;
  direccionFiscal: string;
  alicuotaIvaGeneral: number;
  alicuotaIvaReducida: number;
  alicuotaIgtf: number;
  contribuyenteEspecial: boolean;
  proximoNumeroFactura: number;
  proximoNumeroControl: string;
}

export interface MatrizDistribucionConfig {
  porcentajeGastosOperativos: number;
  porcentajeReinversion: number;
  porcentajeResguardoDivisas: number;
  porcentajeDividendos: number;
}

export interface HardwarePrinterConfig {
  anchoPapelMM: 58 | 80;
  comandosCortePapel: string;
  comandoAperturaGaveta: string;
  imprimirCopiaCliente: boolean;
}

export interface SystemSeedConfig {
  empresa: SeniatConfig;
  tasas: {
    tasaBcvOficial: DecimalAmount;
    tasaBinanceP2P: DecimalAmount;
    colchonVolatilidadPorcentaje: number;
    autoActualizar: boolean;
  };
  inventarioDefault: UMIJerarquia;
  distribucionUtilidades: MatrizDistribucionConfig;
  impresoras: HardwarePrinterConfig;
  themeDefault: ThemeMode;
}

export const SEED_CONFIG: SystemSeedConfig = {
  empresa: {
    rifEmpresa: 'J-50012345-0',
    razonSocial: 'PROVENDOR VENEZUELA C.A.',
    direccionFiscal: 'Av. Francisco de Miranda, Edif. Centro Galipán, Piso 4, Caracas',
    alicuotaIvaGeneral: 0.16,
    alicuotaIvaReducida: 0.08,
    alicuotaIgtf: 0.03,
    contribuyenteEspecial: true,
    proximoNumeroFactura: 1001,
    proximoNumeroControl: '00-00001001'
  },
  tasas: {
    tasaBcvOficial: 36.50,
    tasaBinanceP2P: 39.80,
    colchonVolatilidadPorcentaje: 0.035,
    autoActualizar: true
  },
  inventarioDefault: {
    nivel1MasterNombre: 'Caja Máster',
    nivel1ContenidoEnN2: 50,
    nivel2CajaNombre: 'Display',
    nivel2ContenidoEnN3: 10,
    nivel3CajetillaNombre: 'Cajetilla',
    nivel3ContenidoEnN4: 20,
    nivel4UmiNombre: 'Unidad Mínima'
  },
  distribucionUtilidades: {
    porcentajeGastosOperativos: 0.60,
    porcentajeReinversion: 0.20,
    porcentajeResguardoDivisas: 0.10,
    porcentajeDividendos: 0.10
  },
  impresoras: {
    anchoPapelMM: 80,
    comandosCortePapel: '\x1D\x56\x41\x00',
    comandoAperturaGaveta: '\x1B\x70\x00\x19\xFA',
    imprimirCopiaCliente: false
  },
  themeDefault: 'dark-gold'
};

export type UserRole = 'SuperAdmin' | 'Administrador' | 'Cajero' | 'VendedorCampo' | 'Auditor';

export interface UserSession {
  id: string;
  nombre: string;
  email: string;
  rol: UserRole;
  token: string;
}

export interface ModuleRouteConfig {
  path: string;
  name: string;
  icon: string;
  rolesPermitidos: UserRole[];
}