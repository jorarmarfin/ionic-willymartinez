export interface RptaOctoberMaterial {
    status: string;
    material: Material[];
    blog: Blog[];
  }
export interface Material {
  titulo: string;
  resumen: string;
  imagen: string;
}
export interface RptaOctoberBlog {
  status: string;
  material: Material[];
  posts: Blog[];
}
export interface Blog {
  titulo: string;
  resumen: string;
  imagen: string;
  descripcion:string;
}