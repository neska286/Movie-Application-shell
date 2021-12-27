import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TvShow, TvShowDTO } from '../models/tv';

@Injectable({
  providedIn: 'root'
})
export class TvService {
baseUrl = "https://api.themoviedb.org/3";
apiKey ="4f6fe525374c2df1fe414cb01749d2bf"
  constructor(private http : HttpClient) { }

  getTvShows(type : string = '', count:number = 12){
   return this.http.get<TvShowDTO>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`)
   .pipe(switchMap(data=>{
    return of(data.results.slice(0,count))
   }))   
  }
  getTvShow(id:string){
    return this.http.get<TvShow>(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`)
  }
  serachTvShows(page:number){
    return this.http.get<TvShowDTO>(`${this.baseUrl}/tv/popular?&page=${page}&api_key=${this.apiKey}`)
    .pipe(switchMap(data=>{
     return of(data.results)
    }))   
   }

}




  












