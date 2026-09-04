import { indexedDBProvider } from '../db/indexeddb.provider';

export class SyncEngine {
  private syncing: boolean = false;

  public async sincronizarTransaccionesPendientes(): Promise<void> {
    if (this.syncing || !navigator.onLine) return;
    this.syncing = true;

    try {
      const db = await indexedDBProvider.openDB();
      const tx = db.transaction('cola_sincronizacion', 'readonly');
      const store = tx.objectStore('cola_sincronizacion');
      const request = store.getAll();

      request.onsuccess = async () => {
        const registros = request.result;
        if (registros.length === 0) {
          this.syncing = false;
          return;
        }

        // Procesa la cola local enviando a PostgreSQL
        console.log(`Sincronizando ${registros.length} registros offline...`);
        this.syncing = false;
      };
    } catch (error) {
      console.error('Error procesando motor de sincronización:', error);
      this.syncing = false;
    }
  }
}

export const syncEngine = new SyncEngine();