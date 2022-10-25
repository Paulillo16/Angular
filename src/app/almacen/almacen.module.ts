import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AlmacenListComponent } from './almacen-list/almacen-list.component';
import { AlmacenEditComponent } from './almacen-edit/almacen-edit.component';
import { AlmacenService } from './almacen.service';
import { ALMACEN_ROUTES } from './almacen.routes';
import { MatSelectModule } from '@angular/material/select';
import { EstanteriaListComponent } from '../estanteria/estanteria-list/estanteria-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild(ALMACEN_ROUTES),
  ],
  declarations: [
    AlmacenListComponent,
    AlmacenEditComponent
  ],
  providers: [AlmacenService],
  exports: []
})
export class AlmacenModule { }
