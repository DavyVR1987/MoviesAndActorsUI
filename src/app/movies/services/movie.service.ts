import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private HttpClient: HttpClient) {

  }

  public getAll(): Observable<Movie[]> {
    return this.HttpClient.get<Movie[]>('https://localhost:44341/api/Movies');
  }

  public getById(id: string): Observable<Movie>{
    return this.HttpClient.get<Movie>('https://localhost:44341/api/Movies/'+ id);
  }

  public delete(id: number): Observable<Object> {
    return this.HttpClient.delete('https://localhost:44341/api/Movies/'+ id);
  }

  public editMovie(id:number, movieObject: Movie) {
    const body = movieObject;
    return this.HttpClient.post<any>('https://localhost:44341/api/Movies/' + id, body)
  }
}
