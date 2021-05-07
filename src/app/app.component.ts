import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoviesAndActorsUI';

  faUser = faUserCircle;

  constructor(public authService: AuthService) {

  }
}
