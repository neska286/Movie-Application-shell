import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieVideo, MovieVideoDTO, MovieImages, MovieCredits } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit , OnDestroy{

  movie : Movie | null = null;
  movieVideos : MovieVideo[] = [];
  movieImages : MovieImages | null = null;
  movieCredits : MovieCredits | null = null;
  movieSimilars : Movie [] = [];
  imageSizes = IMAGES_SIZES ;

  constructor(private route : ActivatedRoute , private moviesService : MoviesService) { }

  ngOnInit(): void {
    this.route.params.pipe((first())).subscribe(({id})=>{
     this.getMovie(id);
     this.getVideoMovie(id);
     this.getMovieImages(id);
     this.getMovieCredits(id);
     this.getMoviesimilar(id)
    })
  }
  ngOnDestroy() {
    console.log("destroyed");
  }
getMovie(id:string) {
  this.moviesService.getMovie(id).subscribe(movieData=>{
    this.movie = movieData;
  })
}
getVideoMovie(id: number) {
  this.moviesService.getVideoMovies(id).subscribe((movievideoData)=>{
    this.movieVideos = movievideoData;
  })
}
getMovieImages(id: string) {
  this.moviesService.getMovieImages(id).subscribe(movieimagesData=>{
    this.movieImages = movieimagesData;
    console.log(this.movieImages);
  
  })
}
getMovieCredits(id: string) {
  this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
    this.movieCredits = movieCreditsData;
  });
}
getMoviesimilar(id: string) {
  this.moviesService.getMovieSimilar(id).subscribe((moviesimilarData)=>{
    this.movieSimilars = moviesimilarData
  })
}
}



