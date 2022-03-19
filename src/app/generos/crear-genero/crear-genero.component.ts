import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoDTO } from 'src/app/model/generoDTO';
import { GenerosService } from 'src/app/servicios/generos.service';
import { parsearErroresApi } from 'src/app/utilidades/utils';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent {

  errores: string[] = [];
  constructor(private router: Router, private generoService: GenerosService) { }


  guardarCambiosFromCrear(genero: generoDTO):void {
    this.generoService.crear(genero).subscribe(
      () => {
        this.router.navigate(['/generos']);
      }, 
        (error) => this.errores = parsearErroresApi(error)
    );  
  }

}
