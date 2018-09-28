import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  // Leave constructor as empty as possible
  constructor(private heroService: HeroService) { }

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

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    // Use Lifecycle of ngOnInit()
    this.getHeroes();
  }

}
