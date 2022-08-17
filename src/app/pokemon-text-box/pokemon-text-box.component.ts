import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-text-box',
  templateUrl: './pokemon-text-box.component.html',
  styleUrls: ['./pokemon-text-box.component.scss']
})
export class PokemonTextBoxComponent implements OnInit {
  @Input() text = "";
  constructor() { }

  ngOnInit(): void {
  }

}
