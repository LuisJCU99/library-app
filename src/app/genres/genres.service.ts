import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Genre } from './genre';
import { GENRES } from './mock-genres';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class GenreService {

  constructor(private messageService: MessageService) { }

  getGenres(): Observable<Genre[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(GENRES);
  }

  getGenre(id: number | string) {
    return this.getGenres().pipe(
      // (+) before `id` turns the string into a number
      map((genres: Genre[]) => genres.find(genre => genre.id === +id)!)
    );
  }
}

