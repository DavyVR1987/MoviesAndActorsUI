import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MovieGenre } from '../../models/genre.enum';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss']
})
export class MovieListItemComponent implements OnChanges {

  @Input() movie: Movie;
  public genre: string;
  public JSON;

  constructor() {
    this.JSON = JSON;
   }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.movie) {
      const movie = changes.movie.currentValue as Movie;
      this.genre = MovieGenre[movie.genre];
    }
  }

}
