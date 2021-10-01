import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from  '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private location: Location, private activateRoute: ActivatedRoute) { }

  formFiltroPelicula: FormGroup;
  generos: any;
  peliculas: any;
  peliculasOriginal: any;

  ngOnInit(): void {



    this.generos = [
      { id: 1, nombre: 'Drama'},
      { id: 2, nombre: 'Accion'},
      { id: 3, nombre: 'Comedia'},
      { id: 4, nombre: 'Ficcion'},
      { id: 5, nombre: 'Documentary'}
    ]
    this.peliculas = [
      {titulo: 'Siper-Man: Far From Home', enCines: false, proximosEstrenos: true, generos: [2,4], img:'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'},
      {titulo: 'Mohana', enCines: true, proximosEstrenos: false, generos: [2], img:'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Moana_Teaser_Poster.jpg/220px-Moana_Teaser_Poster.jpg'},
      {titulo: 'Black Widow', enCines: false, proximosEstrenos: true, generos: [2,4], img:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Black_Widow_%282021_film%29_poster.jpg/220px-Black_Widow_%282021_film%29_poster.jpg'},
      {titulo: 'Life is Beatiful', enCines: false, proximosEstrenos: false, generos: [1,3], img:'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Vitaebella.jpg/220px-Vitaebella.jpg'},            
      {titulo: 'American Factory', enCines: false, proximosEstrenos: false, generos: [5], img:'https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/American_Factory_poster.jpg/220px-American_Factory_poster.jpg'}            
    ]

    this.peliculasOriginal = this.peliculas;

    this.formFiltroPelicula = new FormGroup({
      titulo: new FormControl(''),
      generoId: new FormControl(0),
      proximosEstrenos: new FormControl(false),
      enCines: new FormControl(false)
    });

    
    this.leerValoresURL();
    this.filtrarPeliculas(this.formFiltroPelicula.value)
    
    this.formFiltroPelicula.valueChanges.subscribe(valores => {
      console.log(valores);
      this.peliculas = this.peliculasOriginal;
      this.filtrarPeliculas(valores);
      this.escribirParametrosBusquedaEnUrl();
    })

  }

  private leerValoresURL(){
    this.activateRoute.queryParams.subscribe((params)=> {
      console.log(params)
      var objeto: any = {};
      if (params.titulo){
        objeto.titulo = params.titulo;
      }
      if (params.generoId){
        objeto.generoId = params.generoId;
      }
      if (params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }
      if (params.enCines){
        objeto.enCines = params.enCines;
      }

      console.log(objeto)
      this.formFiltroPelicula.patchValue(objeto);

      console.log(this.formFiltroPelicula)

    })
  }

  private escribirParametrosBusquedaEnUrl(){
    var queryStrings = [];
    var valores = this.formFiltroPelicula.value;

    if (valores.titulo){
      queryStrings.push(`titulo=${valores.titulo}`);
    }

    if (valores.generoId !== 0){
      queryStrings.push(`generoId=${valores.generoId}`);
    }

    if (valores.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valores.proximosEstrenos}`);
    }

    if (valores.enCines){
      queryStrings.push(`enCines=${valores.enCines}`);
    }

    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));


  }

  filtrarPeliculas(valores: any){
    if (valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.toLowerCase().indexOf(valores.titulo) != -1)
    }

    if (valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) != -1)
    }

    if (valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos)
    }

    if (valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines)
    }

  }

  Limpiar(): void{

    this.formFiltroPelicula.patchValue({
      titulo: '',
      enCines: false,
      proximosEstrenos: false,
      generoId: 0
    })

    this.peliculas = this.peliculasOriginal;
  }

}
