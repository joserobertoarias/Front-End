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

  @Input()
  errores: string[] = [];

  constructor() { }

  imagenCambiada = false;

  ngOnInit(): void {
    this.formularioActor = new FormGroup({
      id: new FormControl(0),
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
    if (!this.imagenCambiada){
      this.formularioActor.patchValue({'foto':null});
    }
    this.onSubmit.emit(this.formularioActor.value);
  
  }

  getFile(imagen):void {
    this.imagenCambiada = true;
    this.formularioActor.get("foto").setValue(imagen);
  }

  cambioMarkDown(texto: string) {
 
    this.formularioActor.get('biografia').setValue(texto);
  }

}
