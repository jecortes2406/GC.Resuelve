export class HttpClient {
  private baseUrl: string = '/api';

  public async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('pv_token') || ''}`
      }
    });
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return response.json();
  }

  public async post<T>(endpoint: string, payload: unknown): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('pv_token') || ''}`
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return response.json();
  }
}

export const httpClient = new HttpClient();