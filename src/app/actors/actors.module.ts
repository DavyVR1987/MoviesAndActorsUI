import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorService } from './services/actor.service';
import { FormsModule } from '@angular/forms';
import { ActorListComponent } from './actor-list/actor-list.component';


@NgModule({
  declarations: [
    ActorDetailComponent,
    ActorListComponent
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule,
    FormsModule,
  ],
  providers: [
    ActorService,
  ]
})
export class ActorsModule { }
