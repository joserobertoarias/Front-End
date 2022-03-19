import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generoDTO } from 'src/app/model/generoDTO';
import { GenerosService } from 'src/app/servicios/generos.service';
import { parsearErroresApi } from 'src/app/utilidades/utils';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private router: Router, private generoService: GenerosService, private activatedRoute: ActivatedRoute) { }

  errores: string[] = [];
  modelo: generoDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.generoService.obtenerPorId(params.id)
      .subscribe(genero => {
        this.modelo = genero;
      },() => this.router.navigate(['/generos']))
    })
  }

  guardarCambiosFromEditar(genero: generoDTO){
    this.generoService.editar(genero).subscribe(() => {
      this.router.navigate(['/generos']);      
    }, error => this.errores = parsearErroresApi(error))
  }
  
}
