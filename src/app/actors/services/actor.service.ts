import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor } from '../../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private HttpClient: HttpClient) { }

  public getAll(): Observable<Actor[]> {
    return this.HttpClient.get<Actor[]>('https://localhost:44341/api/Actors');
  }

  public getById(id: string): Observable<Actor> {
    return this.HttpClient.get<Actor>('https://localhost:44341/api/Actors/'+ id);
  }

  public editActor(id:number, actorObject: Actor) {
    const body = actorObject;
    return this.HttpClient.put<any>('https://localhost:44341/api/Actors/'+ id, body)
  }

  public addActor(actorObject: Actor) {
    const body = actorObject;
    return this.HttpClient.post<any>('https://localhost:44341/api/Actors', body)
  }
}
