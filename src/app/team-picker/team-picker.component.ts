import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from '../models/team';

@Component({
  selector: 'app-team-picker',
  templateUrl: './team-picker.component.html',
  styleUrls: ['./team-picker.component.scss']
})
export class TeamPickerComponent implements OnInit {
  allTeamsCompleted: boolean = false;
  @Input() set teams(value : Team[]){
    this._teams = value;
  }
  get teams(){
    return this._teams;
  }

  @Output() teamPicked = new EventEmitter<Team[]>();

  teamPickedName : string = "";
  teamPickedImageUrl : string = "";

  _teams : Team[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  pickTeam(){
    let filteredTeam = this.teams.filter(t => t.maxStudentsNumber > t.studentsName.length);
    if(filteredTeam.length == 0){
      this.allTeamsCompleted = true;
      this.teamPickedName = "";
      this.teamPickedImageUrl = "";
      return;
    }
    if(this.teamPickedImageUrl){
      this.teamPickedName = "";
      this.teamPickedImageUrl = "";
      return;
    }
    
    
    let maxTeamIndex = filteredTeam.length;
    let selectedIndex = Math.floor(Math.random() * maxTeamIndex);
    let selectedTeam = filteredTeam[selectedIndex];
    this.teamPickedName = selectedTeam.name;
    this.teamPickedImageUrl = selectedTeam.imageUrl;

    this.teams.find(t => t.name == selectedTeam.name)!.studentsName.push('toto');
    this.teamPicked.emit(this.teams);
  }

}
