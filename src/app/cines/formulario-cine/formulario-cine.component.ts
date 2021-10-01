import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css'],
})
export class FormularioCineComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  cineForm: FormGroup;

  ngOnInit(): void {
    this.cineForm = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required] }],
    });
  }



  
}
