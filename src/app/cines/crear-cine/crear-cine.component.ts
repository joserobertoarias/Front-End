import { Component, OnInit } from '@angular/core';
import { cineDTO } from 'src/app/model/cineDTO';
import { Router } from '@angular/router';
import { CinesService } from './../../servicios/cines.service';
import { parsearErroresApi } from 'src/app/utilidades/utils';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent  {

  errores: string[] = [];
  constructor(private router: Router, private cineService: CinesService) { }


  guardarCine(cine: cineDTO):void {
    console.log(cine);
    cine.latitud = 13.7942;
    cine.longitud = 88.8965;

    this.cineService.crear(cine).subscribe(
      () => {
        this.router.navigate(['/cines']);
      }, 
        (error) => this.errores = parsearErroresApi(error)
    );  
  }





}
