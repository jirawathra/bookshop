import {
  Directive,
  EventEmitter,
  HostListener,
  Output,
  inject,
} from '@angular/core';
import { BookService } from './Services/book.service';
import { GetBookListInterface } from './Model/get-book-list.interface';

@Directive({
  selector: '[appHttpBook]',
})
export class HttpBookDirective {
  private readonly _bookService = inject(BookService);
  bookList: GetBookListInterface[] = [];
  filteredBooks: GetBookListInterface[] = this.bookList;

  @Output() appHttpBook = new EventEmitter();
  constructor() {}

  @HostListener('input', ['$event']) bookSearch(event: any) {
    console.log(event);
    const inputTextElement: HTMLInputElement = event.target;

    this._bookService.findAllBook().subscribe((response) => {
      this.bookList = response;
      this.filteredBooks = this.bookList.filter((book) => {
        const bookName = book.name.toLowerCase();
        const searchName = String(inputTextElement).toLowerCase();
        return bookName.indexOf(searchName) !== -1;
      });

      this.appHttpBook.emit(this.filteredBooks);
    });
  }
}
