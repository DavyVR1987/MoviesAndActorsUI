import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth0Guard } from '../auth0.guard';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';

const routes: Routes = [
  { path: '', component: ActorDetailComponent, canActivate: [Auth0Guard] },
  { path: 'actor-detail/:id', component: ActorDetailComponent, canActivate: [Auth0Guard] },
  { path: 'actor-new', component: ActorDetailComponent, canActivate: [Auth0Guard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule { }
