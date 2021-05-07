import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public movies$: Observable<Movie[]>;

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.movies$ = this.movieService.getAll();
  }

}
