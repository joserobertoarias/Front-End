import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';

import { ReactiveFormsModule, FormsModule } from  '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { FormularioGeneroComponent } from './generos/formulario-genero/formulario-genero.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component'
import { MatSelectModule } from  '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormularioActoresComponent } from './actores/formulario-actores/formulario-actores.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from  '@angular/material/core';
import { ImagenComponent } from './utilidades/imagen/imagen.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import { MatTabsModule } from  '@angular/material/tabs';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatTableModule } from '@angular/material/table'
import { DragDropModule } from '@angular/cdk/drag-drop'

import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import { MarkdownModule } from 'ngx-markdown';
import { FormularioCineComponent } from './cines/formulario-cine/formulario-cine.component';
import { MapaComponent } from './utilidades/mapa/mapa.component';
import { FormularioPelicualsComponent } from './peliculas/formulario-pelicuals/formulario-pelicuals.component';
import { SelectorMultipleComponent } from './utilidades/selector-multiple/selector-multiple.component';
import { AutocompleteActoresComponent } from './actores/autocomplete-actores/autocomplete-actores.component';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';


import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
    IndiceActoresComponent,
    CrearActorComponent,
    CrearPeliculaComponent,
    IndiceCinesComponent,
    CrearCineComponent,
    CrearGeneroComponent,
    EditarActorComponent,
    EditarCineComponent,
    EditarGeneroComponent,
    EditarPeliculaComponent,
    FormularioGeneroComponent,
    FiltroPeliculasComponent,
    FormularioActoresComponent,
    ImagenComponent,
    InputMarkdownComponent,
    FormularioCineComponent,
    MapaComponent,
    FormularioPelicualsComponent,
    SelectorMultipleComponent,
    AutocompleteActoresComponent,
    MostrarErroresComponent,
    AutorizadoComponent, 
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MarkdownModule.forRoot(),
    LeafletModule,
    MatAutocompleteModule,
    MatTableModule,
    DragDropModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
