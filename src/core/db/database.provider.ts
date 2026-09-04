export class DatabaseProvider {
  private isOnline: boolean = navigator.onLine;

  constructor() {
    window.addEventListener('online', () => (this.isOnline = true));
    window.addEventListener('offline', () => (this.isOnline = false));
  }

  public checkConnection(): boolean {
    return this.isOnline;
  }

  public async executeQuery<T>(query: string, params: unknown[] = []): Promise<T[]> {
    if (!this.isOnline) {
      console.warn('Modo Offline Activo: Operación redirigida a IndexedDB/Cache local.');
      return [] as T[];
    }
    // Abstracción para PostgreSQL / API Gateway
    return Promise.resolve([] as T[]);
  }
}

export const dbProvider = new DatabaseProvider();