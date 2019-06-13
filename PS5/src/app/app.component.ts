import { Component } from '@angular/core';
import {PLAYERS} from './PLAYER-MOCK';
import {PLAYER} from './PLAYER';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MLB PLAYERS';
  players = PLAYERS;
  private selectedPlayer: PLAYER;


  selectPlayer(player: PLAYER) {
    this.selectedPlayer = player;

  }
}
