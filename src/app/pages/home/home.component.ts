import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { TvService } from '../../services/tv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie [] = [];
  upcomingMovies: Movie [] = [];
  topratedMovies : Movie [] = [];
  popularTV : Movie [] = []

  constructor(private moviesService: MoviesService , private tvService : TvService) {}

  ngOnInit(): void {
   this.moviesService.getMovies('popular').subscribe((response)=>{
     this.popularMovies = response
   });
   this.moviesService.getMovies('upcoming').subscribe((response)=>{
    this.upcomingMovies = response
  });
  this.moviesService.getMovies('top_rated').subscribe((response)=>{
    this.topratedMovies = response
  });

  this.tvService.getTVShows('popular').subscribe((data : any)=>{
    this.popularTV = data.results
  })
  }
}
