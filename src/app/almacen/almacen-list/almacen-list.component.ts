import { Component, OnInit } from '@angular/core';
import { AlmacenFilter } from '../almacen-filter';
import { AlmacenService } from '../almacen.service';
import { Almacen } from '../almacen';

@Component({
  selector: 'app-almacen',
  templateUrl: 'almacen-list.component.html',
  styles: [
    // todo: figure out how to make width dynamic
    'table { min-width: 600px }',
  ]
})
export class AlmacenListComponent implements OnInit {
  displayedColumns = ['id','cliente','tipo','tamanio','actions'];
  filter = new AlmacenFilter();
  selectedAlmacen!: Almacen;
  feedback: any = {};

  get almacenList(): Almacen[] {
    return this.almacenService.almacenList;
  }

  constructor(private almacenService: AlmacenService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.almacenService.load(this.filter);
  }

  select(selected: Almacen): void {
    this.selectedAlmacen = selected;
  }

  delete(almacen: Almacen): void {
    if (confirm('¿Seguro que desea eliminar el registro?')) {
      this.almacenService.delete(almacen).subscribe({
        next: () => {
          this.feedback = {type: 'success', message: '¡Registro eliminado correctamente!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Se ha producido un error mientras se eliminaba el registro.'};
        }
      });
    }
  }
}
