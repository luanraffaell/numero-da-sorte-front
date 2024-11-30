import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Concurso } from '../interfaces/concurso.interface';

@Injectable({
  providedIn: 'root'
})
export class ConcursoService {

  constructor(private _http:HttpClient) {
  }

  generateNumbers():Observable<Concurso>{
    return this._http.get<Concurso>('http://localhost:8080/concursos/generate')
      .pipe(map((concursoGerado) => {
        return concursoGerado;
      }))
  }
  buscarNumeros(numeros:any):Observable<Concurso>{
    return this._http.post<Concurso>('http://localhost:8080/concursos/search',numeros)
      .pipe(map((concursoGerado) => {
        return concursoGerado;
      }))
  }
  buscarUltimoConcurso():Observable<Concurso>{
    return this._http.get<Concurso>('http://localhost:8080/concursos/last')
      .pipe(map((ultimoConcurso) => {
        return ultimoConcurso;
      }))
  }
}
