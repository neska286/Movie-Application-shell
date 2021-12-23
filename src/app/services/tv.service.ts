import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TvDTO } from '../models/tv';

@Injectable({
  providedIn: 'root'
})
export class TvService {
baseUrl = "https://api.themoviedb.org/3";
apiKey ="4f6fe525374c2df1fe414cb01749d2bf"
  constructor(private http : HttpClient) { }

  getTVShows(type : string = '', count:number = 12){
   return this.http.get<TvDTO>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`)
   .pipe(switchMap(data=>{
    return of(data.results.slice(0,count))
   }))   
  }
}





