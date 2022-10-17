import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenDetalleComponent } from './components/almacen-detalle/almacen-detalle.component';
import { AlmacenFormComponent } from './components/almacen-form/almacen-form.component';
import { AlmacenesComponent } from './components/almacenes/almacenes.component';
import { InstalacionFormComponent } from './components/instalacion-form/instalacion-form.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';

const routes: Routes = [
  { path: '', redirectTo: 'almacenes', pathMatch: 'full' },
  { path: 'almacenes', component: AlmacenesComponent },
  { path: 'almacen-form/:id', component: AlmacenFormComponent },
  { path: 'almacen-detalle/:id', component: AlmacenDetalleComponent },
  { path: 'instalaciones', component: InstalacionesComponent },
  { path: 'instalacion-form/:id', component: InstalacionFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
