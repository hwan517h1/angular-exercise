import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // Send the message after fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES).pipe(
      delay(1000),
      map((heroes: Hero[]) => heroes.map((hero: Hero) => ({...hero, initial: false}))),
    );
  }
}