import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlmacenesComponent } from './components/almacenes/almacenes.component';
import { AlmacenDetalleComponent } from './components/almacen-detalle/almacen-detalle.component';
import { AlmacenFormComponent } from './components/almacen-form/almacen-form.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { InstalacionFormComponent } from './components/instalacion-form/instalacion-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AlmacenesComponent,
    AlmacenDetalleComponent,
    AlmacenFormComponent,
    InstalacionesComponent,
    InstalacionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
