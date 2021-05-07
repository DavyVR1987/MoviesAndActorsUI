import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { MovieService } from '../services/movie.service';
import { MovieGenre } from '../../models/genre.enum';
import { ActorService } from 'src/app/actors/services/actor.service';
import { Actor } from 'src/app/models/actor';

@Component({
  selector: 'app-movie-creation',
  templateUrl: './movie-creation.component.html',
  styleUrls: ['./movie-creation.component.scss'],
})
export class MovieCreationComponent implements OnInit {

  public movieObject$: Observable<Movie>;
  public actors$: Observable<Actor[]>;

  @ViewChild('movieForm') public movieForm: NgForm;

  public movieGenres = MovieGenre;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private actorService: ActorService) { }

  public ngOnInit(): void {
    this.movieObject$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        if(params.get('id')) {
          return this.movieService.getById(params.get('id'));
        }
        return of(new Movie());
      })
    );

    this.actors$ = this.actorService.getAll();
  }

  public backClicked() {
    this.location.back();
  }

  public onSubmit(movieForm: NgForm) {
    if (!movieForm.valid) {
      return;
    }
    const movie = movieForm.value as Movie;
    const dateParts = movie.year.split('/');
    movie.year = new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0]) + 1).toISOString();
    if (movie.id) {
      this.movieService.editMovie(movie.id, movie).pipe(take(1)).subscribe(() => this.location.back());
    } else {
      this.movieService.addMovie(movie).pipe(take(1)).subscribe(() => this.location.back());
    }
  }

}
