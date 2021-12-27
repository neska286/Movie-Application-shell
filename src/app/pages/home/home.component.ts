import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { TvService } from '../../services/tv.service';
import { Item } from '../../components/item/item';
import {mapMovieToItem} from '../../models/movie';
import { mapTvShowToItem} from '../../models/tv'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Item [] = [];
  upcomingMovies: Item [] = [];
  topratedMovies : Item [] = [];
  popularTvShows: Item[] = [];

  constructor(private moviesService: MoviesService , private tvService : TvService) {}

  ngOnInit(): void {
   this.moviesService.getMovies('popular').subscribe((response)=>{
     this.popularMovies = response.map((movie)=>  mapMovieToItem(movie))
   });
   this.moviesService.getMovies('upcoming').subscribe((response)=>{
    this.upcomingMovies = response.map((movie)=>  mapMovieToItem(movie))
  });
  this.moviesService.getMovies('top_rated').subscribe((response)=>{
    this.topratedMovies = response.map((movie)=>  mapMovieToItem(movie))
  });

  this.tvService.getTvShows('popular').subscribe((tvShows)=>{
    this.popularTvShows = tvShows.map((tvshow) => mapTvShowToItem(tvshow));
  })
  }
}


