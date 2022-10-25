import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlmacenService } from '../almacen.service';
import { Almacen } from '../almacen';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-almacen-edit',
  templateUrl: './almacen-edit.component.html',
  styles: [
    // todo: figure out how to make width dynamic
    'form { display: flex; flex-direction: column; min-width: 500px; }',
    'form > * { width: 100% }'
  ]
})
export class AlmacenEditComponent implements OnInit {

  id!: string;
  almacen!: Almacen;
  tiposAlmacen!: Array<string>
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private almacenService: AlmacenService) {
  }

  ngOnInit() {

    this.almacenService.getTiposAlmacen().subscribe({
      next: tipos => {
        this.tiposAlmacen = tipos;
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error al rescatar los tipos de almacén'};
      }
    });    

    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new Almacen()); }
          return this.almacenService.findById(id);
        })
      )
      .subscribe({
        next: almacen => {
          this.almacen = almacen;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error de carga de datos'};
        }
      });
  }

  save() {
    this.almacenService.save(this.almacen).subscribe({
      next: almacen => {
        this.almacen = almacen;
        this.feedback = {type: 'success', message: '¡Guardado correctamente!'};
        setTimeout(async () => {
          await this.router.navigate(['/almacenes']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error al guardar el registro'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/almacenes']);
  }
}
