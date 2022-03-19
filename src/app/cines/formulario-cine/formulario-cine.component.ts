import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cineDTO } from 'src/app/model/cineDTO';
import { coordenadasMapaDTO } from 'src/app/model/coordenadasMapaDTO';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css'],
})
export class FormularioCineComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  formularioCine: FormGroup;

  coordenadaInicial: coordenadasMapaDTO[] = [];

 @Input()
 modelo: cineDTO;

 @Input()
 errores: string[] = [];

 @Output()
 cineEmmitter: EventEmitter<cineDTO> = new EventEmitter<cineDTO>();

  ngOnInit(): void {
    this.formularioCine = this.formBuilder.group({
      id: [0],
      nombre: ['', { validators: [Validators.required] }],
      latitud: ['',{Validators: [Validators.required]}],
      longitud: ['',{Validators: [Validators.required]}],
    });

    if (this.modelo !== undefined){
      this.formularioCine.patchValue(this.modelo);
      this.coordenadaInicial.push({latitud: this.modelo.latitud, longitud: this.modelo.longitud})
    }
  }


  onSubmit():void {
    this.cineEmmitter.emit(this.formularioCine.value);
  }

  obtenerCoordenadas(coordenadas: coordenadasMapaDTO){
    this.formularioCine.patchValue(coordenadas);
  }
  
}
