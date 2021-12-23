import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/tv.service';
import { Tv } from '../../models/tv';

@Component({
  selector: 'tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  tvShows: Tv [] =[]

  constructor(private tvService : TvService) { }

  ngOnInit(): void {
    this.tvService.getTVShows('popular',20).subscribe((tvshowsData)=>{
     this.tvShows = tvshowsData
     console.log(this.tvShows);
    })
  }

}
