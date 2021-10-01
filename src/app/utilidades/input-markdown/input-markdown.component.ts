import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  contenidoMarkDown: string;

  @Output()
  cambioContenidoMarkDown: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  inputTextArea(text: string){
    console.log(text)
    this.contenidoMarkDown = text;
    this.cambioContenidoMarkDown.emit(this.contenidoMarkDown);
  }

}
