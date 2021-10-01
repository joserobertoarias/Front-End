import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO, actorEdicionDTO } from 'src/app/model/actorDTO';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  formularioActor: FormGroup

  @Output()
  onSubmit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  @Input()
  inputModelActor: actorEdicionDTO;


  constructor() { }

  ngOnInit(): void {
    this.formularioActor = new FormGroup({
      nombre: new FormControl('',{validators:[Validators.required]}),
      fechaNac: new FormControl(''),
      foto: new FormControl(''),
      biografia: new FormControl('')
    })

    if (this.inputModelActor != undefined){
      this.formularioActor.patchValue(this.inputModelActor);
    }


  }

  guardar():void {
    this.onSubmit.emit(this.formularioActor.value);
  
  }

  getFile(imagen):void {
    this.formularioActor.get("foto").setValue(imagen);
  }

  cambioMarkDown(texto: string) {
    this.formularioActor.get('biografia').setValue(texto);
  }

}
