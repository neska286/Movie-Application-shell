import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item/item';


@Component({
  selector: 'item-banner',
  templateUrl: './item-banner.component.html',
  styleUrls: ['./item-banner.component.scss']
})
export class ItemBannerComponent implements OnInit {
  @Input() items : Item[] = [];
  @Input() title : string = '';


 
  constructor() { }

  ngOnInit(): void {
  }

}
