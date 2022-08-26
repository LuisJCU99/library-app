import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreService } from './genres.service';
import { Genre } from './genre';
import { BookService } from "../book/book.service";


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres$!: Observable<Genre[]>;
  selectedId = 0;

  constructor(
    private _bookService: BookService,
    private service: GenreService,
    private route: ActivatedRoute,
  ) { this.books = this._bookService.getBooks(); } books: any[];

  ngOnInit() {
    this.genres$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getGenres();
      })
    );
  }
  display = false;
  onPress() {
    //this.display = true;
    this.display = !this.display;
  }
}