import { Component, OnInit } from '@angular/core';
import { peliculaCreacionDTO } from 'src/app/model/peliculaDTO';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarPelicula(pelicula: peliculaCreacionDTO){
    console.log(pelicula);
  }


}
