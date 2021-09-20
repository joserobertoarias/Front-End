import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {


  iconsArray= Array(5);
  ratingSelected = 0;
  
  @Output()
  ratingEmitter: EventEmitter<number> = new EventEmitter<number>()
  
  rated: boolean = false;

  ratingLastSelected = 0;
  constructor() { }

  ngOnInit(): void {
  }

  mouseEnterEventHandler(index: number): void{
    this.ratingSelected = index+1;
  }

  mouseLeaveEventHandler():void {
    if (this.ratingLastSelected !== 0){
      this.ratingSelected = this.ratingLastSelected;
    }else{
      this.ratingSelected = 0;
    }

  }

  clickEventHandler(index: number):void {
    this.rated = true;
    this.ratingSelected = index + 1;
    this.ratingLastSelected = this.ratingSelected;
    this.ratingEmitter.emit(this.ratingSelected);

  }

}
