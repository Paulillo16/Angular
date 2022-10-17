import { Injectable } from '@angular/core';
import { ALMACENES } from '../mocks/almacenes-mock';
import { Almacen } from '../models/almacen';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  constructor() {}

  findAll(): Almacen[] {
    return ALMACENES;
  }

  findById(id: number): Almacen {
    return ALMACENES[0];
  }

  save(formGroup: FormGroup): Boolean {
    return true;
  }
}