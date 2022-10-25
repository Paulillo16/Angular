import { Routes } from '@angular/router';
import { EstanteriaListComponent } from './estanteria-list/estanteria-list.component';
import { EstanteriaEditComponent } from './estanteria-edit/estanteria-edit.component';

export const ESTANTERIA_ROUTES: Routes = [
  {
    path: 'estanterias',
    component: EstanteriaListComponent
  },
  {
    path: 'estanterias/:id',
    component: EstanteriaEditComponent
  }
];
