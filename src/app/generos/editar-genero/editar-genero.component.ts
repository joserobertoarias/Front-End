import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoDTO } from 'src/app/model/generos/generoDTO';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private router: Router) { }

  modelo: generoDTO = { nombre : 'Drama' };

  ngOnInit(): void {
  }

  guardarCambiosFromEditar(genero: generoDTO){
    console.log(genero);
    this.router.navigate(['/generos'])
  }

}
