import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorEdicionDTO } from 'src/app/model/actorDTO';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  modelActor: actorEdicionDTO = {
    nombre: 'Robert Dniro',
    fechaNac: new Date(),
    foto: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Tom_Holland_MTV_2018_%2802%29.jpg'
  }
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
 
    })
  }

  guardarCambios(actor: actorCreacionDTO):void {
    console.log(actor)
  }

}
