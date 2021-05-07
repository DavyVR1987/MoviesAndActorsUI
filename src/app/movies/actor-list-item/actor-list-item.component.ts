import { Component, Input, OnInit } from '@angular/core';
import { Actor } from '../../models/actor';

@Component({
  selector: 'app-actor-list-item',
  templateUrl: './actor-list-item.component.html',
  styleUrls: ['./actor-list-item.component.scss']
})
export class ActorListItemComponent implements OnInit {
  @Input() actor: Actor;
  constructor() { }

  ngOnInit(): void {
  }

}
