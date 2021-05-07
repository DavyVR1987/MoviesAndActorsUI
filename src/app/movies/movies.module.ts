import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './services/movie.service';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorListItemComponent } from './actor-list-item/actor-list-item.component';
import { MovieCreationComponent } from './movie-creation/movie-creation.component';
import { FormsModule } from '@angular/forms';
import { GenrePipe } from '../genre-pipe.pipe';


@NgModule({
  declarations: [
    MoviesListComponent,
    MovieListItemComponent,
    MovieDetailComponent,
    ActorListItemComponent,
    MovieCreationComponent,
    GenrePipe,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
  ],
  providers: [
    MovieService,
  ]
})
export class MoviesModule { }
