import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = 'josemg';
  isLoggedIn = false; //Esto esta funcionando como un state
  favGame = '';

  getFavorite(gameName: string){
    this.favGame = gameName;
  }

  greet() {
    alert('Perfil de GitHub');
  }
}
