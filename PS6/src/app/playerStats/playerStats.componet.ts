import { Component, OnInit, Input } from '@angular/core';

import {PLAYER} from '../playerModel';

@Component({
  selector: 'app-playerStats',
  templateUrl: './playerStats.component.html'
})
export class PlayerStatsComponent implements OnInit {

  @Input() selectedPlayer: PLAYER;

  constructor() { }

  ngOnInit() {
  }

}
