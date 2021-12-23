import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieDTO, MovieVideoDTO, MovieImages, MovieCredits } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs'
import { GenresDTO } from '../models/genres';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private httpClient : HttpClient) {}

  baseUrl : string = 'https://api.themoviedb.org/3';
  apiKey: string = '8c247ea0b4b56ed2ff7d41c9a833aa77';

getMovies(type : string = '', count: number = 12) {
return this.httpClient.get<MovieDTO>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
.pipe(switchMap(data=>{
 return of(data.results.slice(0,count))
}))
}
getVideoMovies(id: number) {
  return this.httpClient.get<MovieVideoDTO>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
  .pipe(switchMap(data=>{
   return of(data.results)
  }))
  }
  getMovieImages(id: string) {
    return this.httpClient.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`)
     
    }
    getMovieCredits(id: string) {
      return this.httpClient.get<MovieCredits>(
        `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
      );
    }
    getMovieSimilar(id: string) {
      return this.httpClient.get<MovieDTO>(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0,12));
        })
      );
    }
    getMovieGenere() {
      return this.httpClient.get<GenresDTO>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
    }
    getMoviesByGenere(genreId:string, pageNumber: number) {
      return this.httpClient.get<MovieDTO>(`${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`)
      .pipe(switchMap(data=>{
       return of(data.results)
      }))
      }
getMovie(id : string){
  return this.httpClient.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
}
searchMovies(page:number) {
  return this.httpClient.get<MovieDTO>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`)
  .pipe(switchMap(data=>{
   return of(data.results)
  }))
  }

getTVShows(type : string = '',count: number = 12){
  return this.httpClient.get<MovieDTO>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`)
  .pipe(switchMap(data=>{
    return of(data.results.slice(0,count))
   }))
   
 }
 
}
