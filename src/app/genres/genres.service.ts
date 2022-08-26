import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Genre } from './genre';
import { GENRES } from './mock-genres';

@Injectable({
  providedIn: 'root',
})
export class GenreService {

  constructor() { }

  getGenres(): Observable<Genre[]> {
    return of(GENRES);
  }
 
  getGenre(id: number | string) {
    return this.getGenres().pipe(
      // (+) before `id` turns the string into a number
      map((genres: Genre[]) => genres.find(genre => genre.id === +id)!)
    );
  }
}

