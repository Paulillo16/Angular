import { Routes } from '@angular/router';
import { AlmacenListComponent } from './almacen-list/almacen-list.component';
import { AlmacenEditComponent } from './almacen-edit/almacen-edit.component';

export const ALMACEN_ROUTES: Routes = [
  {
    path: 'almacenes',
    component: AlmacenListComponent
  },
  {
    path: 'almacenes/:id',
    component: AlmacenEditComponent
  }
];
