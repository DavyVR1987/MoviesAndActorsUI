import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { ActorService } from '../services/actor.service';
import { Actor } from '../../models/actor';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.scss']
})
export class ActorDetailComponent implements OnInit {

  public actor$: Observable<Actor>;

  @ViewChild('actorForm') public actorForm: NgForm

  constructor(
    private activatedRoute: ActivatedRoute,
    private actorService: ActorService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.actor$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        if(params.get('id')) {
          return this.actorService.getById(params.get('id'));
        }
        return of(new Actor());
      })
    );
  }

  public saveClicked() {
    this.actor$.pipe(switchMap(actor =>
      this.actorService.editActor(actor.id, actor)
    )).pipe(take(1)).subscribe(() => this.location.back());

  }

  public backClicked(){
    this.location.back();
  }

  public onSubmit(actorForm: NgForm) {
    if (!actorForm.valid) {
      return;
    }
    const actor = actorForm.value as Actor;
    const dateParts = actor.birthDate.split('/');
    actor.birthDate = new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0]) + 1).toISOString();
    if (actor.id) {
      this.actorService.editActor(actor.id, actor).pipe(take(1)).subscribe(() => this.location.back());
    } else {
      this.actorService.addActor(actor).pipe(take(1)).subscribe(() => this.location.back());
    }
  }

}
