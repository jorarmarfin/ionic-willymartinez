export interface RespuestaOctober {
  status: string;
  totals: number;
  youtube: Youtube[];
}

export interface Youtube {
  version: string;
  type: string;
  html: string;
  height: number;
  author_name: string;
  width: number;
  thumbnail_url: string;
  provider_url: string;
  thumbnail_width: number;
  author_url: string;
  provider_name: string;
  title: string;
  thumbnail_height: number;
  enlace: string;
  categoria: string;
}