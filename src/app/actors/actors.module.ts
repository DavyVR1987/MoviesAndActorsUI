import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorService } from './services/actor.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ActorDetailComponent,
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
