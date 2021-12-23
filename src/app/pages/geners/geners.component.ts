import { Component, OnInit } from '@angular/core';
import { Genre } from '../../models/genres';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-geners',
  templateUrl: './geners.component.html',
  styleUrls: ['./geners.component.scss']
})
export class GenersComponent implements OnInit {
  genres : Genre[] = []

  constructor(private moviesService : MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovieGenere().subscribe((moviegenreData)=>{
      this.genres = moviegenreData
    })
  }

}
