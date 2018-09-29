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

  // Leave constructor as empty as possible
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
      /* Arrow function: [1](parameters) => [3]this.property = [2](parameters)
        [1] parameters of inner function(subscribe) == result of getHeroes()
        [2] [1]'s value
        [3] this is from the outside of inner function */
  }

  ngOnInit() {
    // Use Lifecycle of ngOnInit()
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Partial<Hero>)
      .then(hero => this.heroes.push(hero));
  }
  delete(hero: Hero): void {
    this.heroService.deleteHero(hero)
      .then(() => this.heroes = this.heroes.filter(h => h !== hero));
  }
}
