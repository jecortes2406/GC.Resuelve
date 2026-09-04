import { UserRole } from '../types/common.types';

export class RBACGuard {
  public static tienePermiso(rolUsuario: UserRole, rolesPermitidos: UserRole[]): boolean {
    if (rolUsuario === 'SuperAdmin') return true;
    return rolesPermitidos.includes(rolUsuario);
  }
}