import { Almacen } from './almacen';
import { AlmacenFilter } from './almacen-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class AlmacenService {
  almacenList: Almacen[] = [];
  api = `${env.backendUrl}/api/almacenes`;

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Almacen> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Almacen>(url, {params, headers});
  }

  getTiposAlmacen(): Observable<Array<string>> {
    const url = `${this.api}/tipos`;
    return this.http.get<Array<string>>(url, {headers});
  }    

  load(filter: AlmacenFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.almacenList = result;
      },
      error: err => {
        console.error('Error de carga de datos', err);
      }
    });
  }

  find(filter: AlmacenFilter): Observable<Almacen[]> {
    const params = {
      'cliente': filter.cliente,
    };

    return this.http.get<Almacen[]>(this.api, {params, headers});
  }

  save(entity: Almacen): Observable<Almacen> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Almacen>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Almacen>(url, entity, {headers, params});
    }
  }

  delete(entity: Almacen): Observable<Almacen> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Almacen>(url, {headers, params});
    }
    return EMPTY;
  }
}

