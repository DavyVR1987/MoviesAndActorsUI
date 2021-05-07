import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { MovieGenre } from '../../models/genre.enum';
import { Movie } from '../../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public movie$: Observable<Movie>;
  public movieGenre = MovieGenre;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.movie$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
      return this.movieService.getById(params.get('id'));
      })
    );
  }

  public deleteClicked() {
    this.movie$.pipe(
      switchMap(movie => this.movieService.delete(movie.id)
    )).pipe(take(1)).subscribe(() =>  this.router.navigate(['/movies-list']));
  }

  public editClicked()
  {

  }

}


