export class CryptoUtil {
  public static encryptData(data: string): string {
    return btoa(encodeURIComponent(data));
  }

  public static decryptData(cipherText: string): string {
    try {
      return decodeURIComponent(atob(cipherText));
    } catch {
      return '';
    }
  }
}