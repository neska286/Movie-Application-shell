import { Component, OnInit } from '@angular/core';
import { mapTvShowToItem, TvShow } from '../../models/tv';
import { TvService } from '../../services/tv.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../components/item/item';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  tvShow : TvShow | null = null;
  tvShowBanner: Item | null = null;
  imagesSizes = IMAGES_SIZES;


  constructor(private tvService : TvService , private route :ActivatedRoute) { }

  ngOnInit(): void {
   this.route.params.subscribe(({id})=>{
    this.getTvShow(id);
   })
  }
getTvShow(id:string){
  this.tvService.getTvShow(id).subscribe(tvShowData=>{
    this.tvShowBanner = mapTvShowToItem(tvShowData);
    this.tvShow = tvShowData;
  })
}
}
