import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  constructor(private router: Router, private formbuilder: FormBuilder) { }

  generoForm: FormGroup;


  ngOnInit(): void {
    this.generoForm = this.formbuilder.group({
      nombre: ''
    });
  }

  guardarCambios():void {
    //.. guardar los cambios.
    this.router.navigate(['/generos']);

  }

}
