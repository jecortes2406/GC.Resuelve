export interface OfflineQueueItem {
  id?: number;
  modulo: string;
  accion: string;
  payload: Record<string, unknown>;
  timestamp: string;
  estado: 'pendiente' | 'sincronizado' | 'error';
}

export class IndexedDBProvider {
  private dbName = 'ProVendorLocalDB';
  private version = 1;

  public async openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('cola_sincronizacion')) {
          db.createObjectStore('cola_sincronizacion', { keyPath: 'id', autoIncrement: true });
        }
        if (!db.objectStoreNames.contains('cache_inventario_umi')) {
          db.createObjectStore('cache_inventario_umi', { keyPath: 'sku' });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  public async encolarTransaccion(item: Omit<OfflineQueueItem, 'id'>): Promise<number> {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('cola_sincronizacion', 'readwrite');
      const store = tx.objectStore('cola_sincronizacion');
      const req = store.add(item);

      req.onsuccess = () => resolve(req.result as number);
      req.onerror = () => reject(req.error);
    });
  }
}

export const indexedDBProvider = new IndexedDBProvider();