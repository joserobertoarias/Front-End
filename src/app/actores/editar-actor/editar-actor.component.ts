import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorCreacionDTO, actorEdicionDTO } from 'src/app/model/actorDTO';
import { ActoresService } from 'src/app/servicios/actores.service';
import { parsearErroresApi } from 'src/app/utilidades/utils';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {



  constructor(private router: Router, private actorService: ActoresService, private activatedRoute: ActivatedRoute) { }

  errores: string[] = [];
  modelActor: actorEdicionDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id)
      this.actorService.obtenerPorId(params.id)
      .subscribe(actor => {
        this.modelActor = actor;
      },() => this.router.navigate(['/actores']))
    })
  }

  guardarCambios(actor: actorCreacionDTO){
    this.actorService.editar(actor).subscribe(() => {
      this.router.navigate(['/actores']);      
    }, error => this.errores = parsearErroresApi(error))
  }

}
