import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cineDTO } from 'src/app/model/cineDTO';
import { CinesService } from 'src/app/servicios/cines.service';
import { parsearErroresApi } from 'src/app/utilidades/utils';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor(private router: Router, private cinesSerive: CinesService, private activatedRoute: ActivatedRoute) { }


  errores: string[] = [];
  modelo: cineDTO;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.cinesSerive.obtenerPorId(params.id)
      .subscribe(cines => {
        console.log(cines)
        this.modelo = cines;
      },() => this.router.navigate(['/cines']))
    })
  }

  guardarCine(cine: cineDTO){
    this.cinesSerive.editar(cine).subscribe(() => {
      this.router.navigate(['/cines']);      
    }, error => this.errores = parsearErroresApi(error))
  }


}
