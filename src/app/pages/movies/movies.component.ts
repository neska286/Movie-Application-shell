import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

   movies: Movie [] =[];
   genreId: string | null = null;
  constructor(private movieService : MoviesService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({genreId}) =>{
      if(genreId) {
        this.genreId = genreId;
        this.getMoviesByGenre(genreId,1)
      } else {
        this.getPaginateMovies(1);
      }
    })
   
  }
  getPaginateMovies(page:number){
    this.movieService.searchMovies(page).subscribe(response=>{
      this.movies = response
    })
  }
  paginate(event : any) {
    const pageNumber = event.page+1
    if(this.genreId) {
     this.getMoviesByGenre(this.genreId,  pageNumber)
    }else {
      this.getPaginateMovies(pageNumber)
    }
   
  }

  getMoviesByGenre(genreId: string , pageNumber:number) {
    this.movieService.getMoviesByGenere(genreId , pageNumber).subscribe((moviesgenre)=>{
      this.movies = moviesgenre
    })
  }
}
