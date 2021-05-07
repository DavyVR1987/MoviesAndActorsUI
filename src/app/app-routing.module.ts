import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth0Guard } from './auth0.guard';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'actors',
    loadChildren: () => import('./actors/actors.module').then(a => a.ActorsModule)
  },
  {
    path: 'login',
    loadChildren:() => import('./login/login.module').then(l => l.LoginModule)
  },

  { path: '', redirectTo: '/movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
