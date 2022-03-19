import { Component, OnInit } from '@angular/core';
import { peliculaCreacionDTO, peliculaEditarDTO } from 'src/app/model/peliculaDTO';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: peliculaEditarDTO = { titulo:'Spider-Man','trailer':'abc', enCines: false, resumen: 'hombre arana', fechaLanzamiento: new Date(), poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'}
  
  ngOnInit(): void {
  }

  guardarCambios(pelicula: peliculaCreacionDTO){
    console.log(pelicula)
  }

}
