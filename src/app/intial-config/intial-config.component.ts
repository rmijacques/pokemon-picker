import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Team } from '../models/team';

@Component({
  selector: 'app-intial-config',
  templateUrl: './intial-config.component.html',
  styleUrls: ['./intial-config.component.scss']
})
export class IntialConfigComponent implements OnInit {
  TEAM_NAMES = ['Salamèche','Carapuce','Pikachu','Bulbizarre'];
  teams: Team[] = [];

  @Output() teamsBuiltEM = new EventEmitter<Team[]>();
  
  constructor() { }


  ngOnInit(): void {
    for(let teamName of this.TEAM_NAMES){
      this.teams.push({name:teamName,maxStudentsNumber:6,studentsName:[],imageUrl:""});
    }    
  }

  onValidation(){
    this.teamsBuiltEM.emit(this.teams);
  }

}
