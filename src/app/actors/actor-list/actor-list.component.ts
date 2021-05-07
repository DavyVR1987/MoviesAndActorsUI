import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/models/actor';
import { ActorService } from '../services/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {
  public actor$: Observable<Actor[]>;

  constructor(public actorService: ActorService) { }

  ngOnInit(): void {
    this.actor$ = this.actorService.getAll();
  }

}
