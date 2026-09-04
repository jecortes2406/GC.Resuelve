import { ModuleRouteConfig } from '../core/types/common.types';

export const MODULE_ROUTES: ModuleRouteConfig[] = [
  { path: '/configuracion', name: '00. Configuración & Hardware', icon: 'settings', rolesPermitidos: ['SuperAdmin', 'Administrador'] },
  { path: '/dashboard', name: '01. Dashboard & Copilot AI', icon: 'dashboard', rolesPermitidos: ['SuperAdmin', 'Administrador', 'Auditor'] },
  { path: '/pos', name: '02. POS & Ventas Omnicanal', icon: 'shopping-cart', rolesPermitidos: ['SuperAdmin', 'Administrador', 'Cajero'] },
  { path: '/inventario', name: '03. Inventario SSOT & UMI', icon: 'box', rolesPermitidos: ['SuperAdmin', 'Administrador', 'Cajero'] },
  { path: '/gastos', name: '04. Gastos & Punto Equilibrio', icon: 'trending-down', rolesPermitidos: ['SuperAdmin', 'Administrador'] },
  { path: '/tesoreria', name: '05. Tesorería & Nómina', icon: 'dollar-sign', rolesPermitidos: ['SuperAdmin', 'Administrador'] },
  { path: '/crm', name: '06. CRM & Fuerza Ventas', icon: 'users', rolesPermitidos: ['SuperAdmin', 'Administrador', 'VendedorCampo'] },
  { path: '/contabilidad', name: '07. Contabilidad SENIAT', icon: 'file-text', rolesPermitidos: ['SuperAdmin', 'Administrador', 'Auditor'] },
  { path: '/usuarios', name: '08. Control Usuarios RBAC', icon: 'shield', rolesPermitidos: ['SuperAdmin'] },
  { path: '/devoluciones', name: '09. Devoluciones & Mermas', icon: 'rotate-ccw', rolesPermitidos: ['SuperAdmin', 'Administrador', 'Cajero'] },
  { path: '/compras', name: '10. Compras & Abastecimiento', icon: 'truck', rolesPermitidos: ['SuperAdmin', 'Administrador'] },
];