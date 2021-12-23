import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Movie } from '../../models/movie';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade',[
    state('void',style({opacity:0})),
    //hide in one second
    transition('void <=> *',[animate('1s ease-out')]),
  ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items : Movie[] = [];
  @Input() isBanner : boolean = false;
  readonly imageSizes = IMAGES_SIZES;
  currentSlideIndex : number = 0;

  constructor() { }

  ngOnInit(): void {
    if(!this.isBanner) {
      setInterval(()=>{
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length
            },5000)
          }
    }
}
