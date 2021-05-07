import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { MovieService } from '../services/movie.service';
import { MovieGenre } from '../../models/genre.enum';

@Component({
  selector: 'app-movie-creation',
  templateUrl: './movie-creation.component.html',
  styleUrls: ['./movie-creation.component.scss'],
})
export class MovieCreationComponent implements OnInit {

  public movieObject$: Observable<Movie>;

  @ViewChild('movieForm') public movieForm: NgForm;

  public movieGenres = MovieGenre;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private location: Location) { }

  public ngOnInit(): void {
    this.movieObject$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        if(params.get('id')) {
          return this.movieService.getById(params.get('id'));
        }
        return of(new Movie());
      })
    );
  }

  public backClicked() {
    this.location.back();
  }

  public onSubmit(movieForm: NgForm) {
    if (!movieForm.valid) {
      return;
    }
  }

}
