import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { actorCreacionDTO, actorEdicionDTO } from '../model/actorDTO';
import { formatearFecha } from '../utilidades/utils';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  private apiURL = environment.apiURL + 'actores';

  constructor(private http: HttpClient) { }

  
  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<actorEdicionDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public obtenerPorId(id: number): Observable<actorEdicionDTO> {
    return this.http.get<actorEdicionDTO>(`${this.apiURL}/${id}`);

  }



  public borrar(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  public crear(actor: actorCreacionDTO){
    const formData = this.construirFormData(actor);
    return this.http.post(this.apiURL, formData);
  }

  
  public editar(actor: actorCreacionDTO){
    const formData = this.construirFormData(actor);
    return this.http.put(this.apiURL, formData);
  }

  private construirFormData(actor: actorCreacionDTO): FormData {
    const formData = new FormData();
    formData.append('id', actor.id.toString());
    formData.append('nombre', actor.nombre);
    if (actor.biografia){
      formData.append('biografia', actor.biografia);
    }
    if (actor.fechaNac){
      formData.append('fechaNac', formatearFecha(actor.fechaNac));      
    }
    if (actor.foto){
      formData.append('foto',actor.foto);      
    }

    return formData;

  }

}
