import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { actorCreacionDTO } from 'src/app/model/actorDTO';
import { ActoresService } from 'src/app/servicios/actores.service';
import { parsearErroresApi } from 'src/app/utilidades/utils';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent implements OnInit {

  constructor(private actoresService: ActoresService, private router: Router) { }

  errores = [];
  ngOnInit(): void {
  }

  guardarActor(actor: actorCreacionDTO):void {
    this.actoresService.crear(actor).subscribe(() => {
      this.router.navigate(['/actores']);
    },errores => this.errores = parsearErroresApi(errores));
  }

}
