import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cineDTO } from 'src/app/model/cineDTO';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css'],
})
export class FormularioCineComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  formularioCine: FormGroup;

 @Input()
 modelo: cineDTO;

 @Output()
 cineEmmitter: EventEmitter<cineDTO> = new EventEmitter<cineDTO>();

  ngOnInit(): void {
    this.formularioCine = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required] }],
    });
  }


  onSubmit():void {
    this.cineEmmitter.emit(this.formularioCine.value);
  }
  
}
