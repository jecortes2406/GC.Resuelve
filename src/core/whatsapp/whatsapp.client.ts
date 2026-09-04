export class WhatsAppClient {
  public static generarLinkComprobante(telefono: string, mensaje: string): string {
    const telefonoLimpio = telefono.replace(/\D/g, '');
    const mensajeCodificado = encodeURIComponent(mensaje);
    return `https://wa.me/${telefonoLimpio}?text=${mensajeCodificado}`;
  }
}