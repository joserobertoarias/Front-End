import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultipleSelectorModel } from 'src/app/model/MultipleSelectorDTO';
import { peliculaCreacionDTO, peliculaEditarDTO } from 'src/app/model/peliculaDTO';

@Component({
  selector: 'app-formulario-pelicuals',
  templateUrl: './formulario-pelicuals.component.html',
  styleUrls: ['./formulario-pelicuals.component.css']
})
export class FormularioPelicualsComponent implements OnInit {

  form: FormGroup;
  constructor(private fombuilder: FormBuilder) { }

  @Output()
  onSubmit: EventEmitter<peliculaCreacionDTO> = new EventEmitter<peliculaCreacionDTO>();

  @Input()
  datosEdicion: peliculaEditarDTO

  generosNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 2, valor: 'Comedia'},
    {llave: 3, valor: 'Accion'},
    {llave: 4, valor: 'Ciencia Ficcion'}
  ]

  generosSeleccionados: MultipleSelectorModel[] = []

  cinesNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor: 'Muticinema Plaza Mundo'},
    {llave: 2, valor: 'CineMark MetroCentro'},
    {llave: 3, valor: 'CineMark Gran Via'},
    {llave: 4, valor: 'Multicinema Galerias'}
  ]

  cinesSeleccionados: MultipleSelectorModel[] = []

  ngOnInit(): void {
    this.form = this.fombuilder.group({
      titulo: ['', { validators: [Validators.required]}],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosId: '',
      cinesId: ''
    })

    if (this.datosEdicion !== null){
      this.form.patchValue(this.datosEdicion);
    }

  }

  guardarCambios() {
    let generosIds = this.generosSeleccionados.map(valor => valor.llave);
    this.form.get('generosId').setValue(generosIds);

    let cinesIds = this.cinesSeleccionados.map(valor => valor.llave);
    this.form.get('cinesId').setValue(cinesIds);

    this.onSubmit.emit(this.form.value);

  }

  archivoSeleccionado(file: File){
    this.form.get('poster').setValue(file);

  }

  getContentMarkDown(contenido: string){
    this.form.get('resumen').setValue(contenido);
  }

}
