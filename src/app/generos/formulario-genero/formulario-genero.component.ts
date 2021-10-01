import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generoDTO } from '../../model/generos/generoDTO';
import { EventEmitter } from '@angular/core';
import { primeraLetraMayuscula } from '../../utilidades/validadores/primeraLetraMayuscula';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  constructor(private router: Router, private formbuilder: FormBuilder) { }

  generoForm: FormGroup;

  @Input()
  modelo: generoDTO;

  @Output()
  onSubmit: EventEmitter<generoDTO> = new EventEmitter<generoDTO>()

  ngOnInit(): void {
    // this.generoForm = this.formbuilder.group({
    //   nombre: ['',{
    //     validators: [Validators.required, Validators.minLength(3)]
    //   }]
    // });


    this.generoForm = new FormGroup({
      nombre: new FormControl('', {validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]})
    });

    if(this.modelo !== undefined){
      //con patchvValue le pasamos el modelo al formulario, y angular se encarga de igualar los cambos por el nombre.
      this.generoForm.patchValue(this.modelo);      
    }

  }

  guardarCambios():void {
    //.. emitir los cambios al componente padre
    this.onSubmit.emit(this.generoForm.value)

  }

  obtenerErrorCampoNombre(){
    var campo = this.generoForm.get('nombre');
    if (campo.hasError('required')){
      return 'El campo nombre es requerido'
    }
    if (campo.hasError('minlength')){
      return 'La longitud minima es de 3 caracteres'
    }

    if (campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }

    return '';

  }
}
