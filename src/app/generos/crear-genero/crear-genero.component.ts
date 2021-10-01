import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoDTO } from 'src/app/model/generos/generoDTO';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {

  }

  guardarCambiosFromCrear(genero: generoDTO):void {
    //.. guardar los cambios.
    console.log(genero);
    this.router.navigate(['/generos']);

  }


}
