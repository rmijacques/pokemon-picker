import { Component } from '@angular/core';
import { Team } from './models/team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PokemonPicker';
  teams : Team[] = [];
  teamsConfigured = false;

  teamConfigured(teams : Team[]){
    this.teams = teams;
    this.teamsConfigured = true;
  }

  teamPicked(teams: Team[]){
    this.teams = teams;
  }
}
