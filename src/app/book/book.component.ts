import { Component, OnInit } from '@angular/core';
import {BookService} from './book.service';
import { GenresComponent } from "../genres/genres.component";
import { Genre } from '../genres/genre';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(private _bookService: BookService) {
    this.books = this._bookService.getBooks();
}  

//genres$!: Observable<Genre[]>;

  books: any[];
  dropDownValue = "";
      SetDropDownValue(drpValue : any) {
        this.dropDownValue = drpValue.target.value;
    }
 
}
