import { Component, OnInit } from '@angular/core';
import { actorCreacionDTO } from 'src/app/model/actorDTO';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarActor(actor: actorCreacionDTO):void {
    console.log(actor);
  }

}
