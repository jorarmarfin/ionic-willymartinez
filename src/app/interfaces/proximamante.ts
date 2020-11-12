export interface RptaOctoberProx {
  status: string;
  proximamente: Proximamente[];
}
export interface Proximamente {
  titulo: string;
  imagen: string;
  inscripcion: number;
  enlace: string;
}