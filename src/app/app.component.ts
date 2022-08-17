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

  ngOnInit(){

    this.teams.push({name:"Pikachu",maxStudentsNumber:6,studentsName:[],imageUrl:'pikachu.png'});
    this.teams.push({name:"Carapuce",maxStudentsNumber:6,studentsName:[],imageUrl:'carapuce.png'});
    this.teams.push({name:"Salameche",maxStudentsNumber:6,studentsName:[],imageUrl:'salameche.png'});
    this.teams.push({name:"Bulbizarre",maxStudentsNumber:6,studentsName:[],imageUrl:'bulbizarre.png'});
    this.teamsConfigured = true;
  }

  teamConfigured(teams : Team[]){
    this.teams = teams;
    this.teamsConfigured = true;
  }

  teamPicked(teams: Team[]){
    this.teams = teams;
  }
}
