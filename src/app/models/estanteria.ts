import { Almacen } from "./almacen";

export interface Estanteria {
    id: number;
    almacen: Almacen[];
    uuid: string;
    type: string;
  }