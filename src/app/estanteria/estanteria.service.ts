import { Estanteria } from './estanteria';
import { EstanteriaFilter } from './estanteria-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class EstanteriaService {
  estanteriaList: Estanteria[] = [];
  api = `${env.backendUrl}/api/estanterias`;

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Estanteria> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Estanteria>(url, {params, headers});
  }

  getTiposEstanteria(): Observable<Array<string>> {
    const url = `${this.api}/tipos`;
    return this.http.get<Array<string>>(url, {headers});
  }  

  load(filter: EstanteriaFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.estanteriaList = result;
      },
      error: err => {
        console.error('Error de carga de datos', err);
      }
    });
  }

  find(filter: EstanteriaFilter): Observable<Estanteria[]> {
    const params = {
    };

    return this.http.get<Estanteria[]>(this.api, {params, headers});
  }

  save(entity: Estanteria): Observable<Estanteria> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Estanteria>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Estanteria>(url, entity, {headers, params});
    }
  }

  delete(entity: Estanteria): Observable<Estanteria> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Estanteria>(url, {headers, params});
    }
    return EMPTY;
  }
}

