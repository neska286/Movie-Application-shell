import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/tv.service';
import { TvShow } from '../../models/tv';

@Component({
  selector: 'tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  tvShows: TvShow[] =[]

  constructor(private tvService : TvService) { }

  ngOnInit(): void {
   this.getPagedTvShows(1);
  }
  getPagedTvShows(page:number) {
    this.tvService.serachTvShows(page).subscribe((tvshowsData)=>{
      this.tvShows = tvshowsData
     })
  }
  paginate(event : any) {
   this.getPagedTvShows(event.page +1);
  }
}
