import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth0Guard } from '../auth0.guard';
import { MovieCreationComponent } from './movie-creation/movie-creation.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent, canActivate: [Auth0Guard]},
  { path: 'movie-detail/:id', component: MovieDetailComponent, canActivate: [Auth0Guard] },
  { path: 'movie-edit/:id', component: MovieCreationComponent, canActivate: [Auth0Guard] },
  { path: 'movie-new', component:MovieCreationComponent, canActivate: [Auth0Guard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
