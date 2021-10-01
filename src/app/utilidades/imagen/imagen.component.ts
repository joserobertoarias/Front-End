import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utils';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  @Output()
  selectedFile: EventEmitter<File> = new EventEmitter<File>();

  @Input()
  urlImagenActual: string

  constructor() { }

  imagenBase64: string;

  ngOnInit(): void {
  }

  seleccionarImagen(event):void{

    if (event.target.files.length > 0)
    {
      const file: File = event.target.files[0];
      toBase64(file).then((value: string) => this.imagenBase64 = value)
      .catch(error => console.log(error));   
      
      this.selectedFile.emit(file);
      this.urlImagenActual = null;

    }
  }

}
