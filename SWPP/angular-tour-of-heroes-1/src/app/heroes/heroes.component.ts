import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  onCheck(event): void {
    if(event.target.checked) {
      this.selectedHero.initial = true;
      console.log('Checked')
    } else {
      this.selectedHero.initial = false;
      console.log('NOT Checked')
    }
  }

  ngOnInit() {
  }

}
