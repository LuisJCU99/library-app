import { Component} from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(private _bookService: BookService) {
    this.books = this._bookService.getBooks();
  }
  books: any[];
  dropDownValue = "";
  SetDropDownValue(drpValue: any) {
    this.dropDownValue = drpValue.target.value;
  }

}
