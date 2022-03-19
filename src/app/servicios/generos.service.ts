import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { generoDTO } from '../model/generoDTO';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private apiURL = environment.apiURL + 'generos';

  constructor(private http: HttpClient) { }

  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<generoDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public obtenerPorId(id: number): Observable<generoDTO> {
    return this.http.get<generoDTO>(`${this.apiURL}/${id}`);

  }

  public crear(genero: generoDTO) {
    return this.http.post(this.apiURL, genero);
  }

  public editar(genero: generoDTO){
    return this.http.put(this.apiURL, genero);
  }

  public borrar(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }


}