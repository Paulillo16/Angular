import { Component, OnInit } from '@angular/core';
import { EstanteriaFilter } from '../estanteria-filter';
import { EstanteriaService } from '../estanteria.service';
import { Estanteria } from '../estanteria';

@Component({
  selector: 'app-estanteria',
  templateUrl: 'estanteria-list.component.html',
  styles: [
    // todo: figure out how to make width dynamic
    'table { min-width: 800px }',
  ]
})
export class EstanteriaListComponent implements OnInit {
  displayedColumns = ['id','almacen','tipo','actions'];
  filter = new EstanteriaFilter();
  selectedEstanteria!: Estanteria;
  feedback: any = {};

  get estanteriaList(): Estanteria[] {
    return this.estanteriaService.estanteriaList;
  }

  constructor(private estanteriaService: EstanteriaService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.estanteriaService.load(this.filter);
  }

  select(selected: Estanteria): void {
    this.selectedEstanteria = selected;
  }

  delete(estanteria: Estanteria): void {
    if (confirm('¿Seguro que desea eliminar el registro?')) {
      this.estanteriaService.delete(estanteria).subscribe({
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
