import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      
      this.peliculasEnCines = [
        
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
          img : "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg"
        },
        {
          titulo: 'Avenger EndGame',
          fechaLanzamiento: new Date(),
          precio: 1200.99,
          img : "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
        },
        {
          titulo: 'Ant-Man',
          fechaLanzamiento: new Date(),
          precio: 1000.99,
          img: "https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg"
        },
      ];  
      
      
      this.peliculasProximosEstrenos = [
      ];  
         
    }, 500);

    
  }
  title = 'front-end';

  peliculasEnCines;
  peliculasProximosEstrenos;

  ratingEmiterEventHandler(rate: number):void {
    alert(rate);
  }

}
