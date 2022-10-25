import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstanteriaService } from '../estanteria.service';
import { Estanteria } from '../estanteria';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-estanteria-edit',
  templateUrl: './estanteria-edit.component.html',
  styles: [
    // todo: figure out how to make width dynamic
    'form { display: flex; flex-direction: column; min-width: 500px; }',
    'form > * { width: 100% }'
  ]
})
export class EstanteriaEditComponent implements OnInit {

  id!: string;
  estanteria!: Estanteria;
  tiposEstanteria!: Array<string>;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estanteriaService: EstanteriaService) {
  }

  ngOnInit() {

    this.estanteriaService.getTiposEstanteria().subscribe({
      next: tipos => {
        this.tiposEstanteria = tipos;
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error al resccatar los tipos de estanterías'};
      }
    });
    
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new Estanteria()); }
          return this.estanteriaService.findById(id);
        })
      )
      .subscribe({
        next: estanteria => {
          this.estanteria = estanteria;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error de carga de datos'};
        }
      });
  }

  save() {
    this.estanteriaService.save(this.estanteria).subscribe({
      next: estanteria => {
        this.estanteria = estanteria;
        this.feedback = {type: 'success', message: '¡Guardado correctamente!'};
        setTimeout(async () => {
          await this.router.navigate(['/estanterias']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error al guardar el registro'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/estanterias']);
  }
}
