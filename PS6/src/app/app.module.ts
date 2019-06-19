import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlayerStatsComponent } from './playerStats/playerStats.componet';
import { AddPlayerComponent } from './addPlayer/addplayer.componet';

@NgModule({
  declarations: [
    AppComponent,
    PlayerStatsComponent,
    AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }