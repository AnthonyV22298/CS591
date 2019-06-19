import { Component, OnInit } from '@angular/core';
import {PLAYER} from '../playerModel';
import { PlayerServiceAsyncService} from '../services/player-service-async.service';

@Component({
  selector: 'app-addPlayer',
  templateUrl: './addPlayer.component.html'
})
export class AddPlayerComponent implements OnInit {
  my: any = {
    team: '',
    name: ''
  };

  addPlayer( ): void {
    const newPlayer: PLAYER = {
      city:       this.my.name,
      team: this.my.department,
      name:        this.my.UID,
      position:        'bogus'
    };
//    this.contacts.push(newContact);
    this.playerService.addPlayer(newPlayer)
      .subscribe();
  }

  constructor(private playerService: PlayerServiceAsyncService) { }

  ngOnInit() {
  }

}
