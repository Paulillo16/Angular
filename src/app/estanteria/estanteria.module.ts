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
import { EstanteriaListComponent } from './estanteria-list/estanteria-list.component';
import { EstanteriaEditComponent } from './estanteria-edit/estanteria-edit.component';
import { EstanteriaService } from './estanteria.service';
import { ESTANTERIA_ROUTES } from './estanteria.routes';
import { MatSelectModule } from '@angular/material/select';

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
    RouterModule.forChild(ESTANTERIA_ROUTES),
  ],
  declarations: [
    EstanteriaListComponent,
    EstanteriaEditComponent
  ],
  providers: [EstanteriaService],
  exports: []
})
export class EstanteriaModule { }
