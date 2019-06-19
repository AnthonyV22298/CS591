import { Component, OnInit } from '@angular/core';
// import {PLAYERS} from './PLAYER-MOCK';
import {PLAYER} from './playerModel';
import { PlayerServiceAsyncService} from './services/player-service-async.service';
import { PlayerService} from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MLB PLAYERS';
  players = [];
  private selectedPlayer: PLAYER;

  getPlayers(): void {
    this.PlayerService.getPlayers()
      .subscribe(players => {
        this.players = players;
        console.log(`Players: ${this.players}`);
      });
  }


  selectPlayer(player: PLAYER) {
    this.selectedPlayer = player;

  }

  displayPlayerDetail(player: PLAYER) {
    this.selectedPlayer = player;
  }

  constructor(private PlayerService: PlayerServiceAsyncService) {

  }
  ngOnInit() {
    this.getPlayers();
  }
}
