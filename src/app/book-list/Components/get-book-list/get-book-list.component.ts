import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { GetBookListInterface } from '../../Model/get-book-list.interface';
import { Observable, auditTime, debounceTime } from 'rxjs';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-get-book-list',
  templateUrl: './get-book-list.component.html',
  styleUrls: ['./get-book-list.component.scss'],
})
export class GetBookListComponent implements OnInit {
  // constructor(private _http: HttpClient) {}
  // private readonly _bookService = inject(BookService);

  @Output() onInput = new EventEmitter();
  @Output() onSearch = this.onInput.pipe(debounceTime(400));
  ngOnInit(): void {
    // this.getBookList();
  }

  bookList: GetBookListInterface[] = [];
  filteredBooks: GetBookListInterface[] = this.bookList;
  // bookListUrl: string = 'https://www.anapioficeandfire.com/api/books';
  // bookListUrl: string = 'http://localhost:3000/api/book';

  getBookList() {
    // this._bookService.findAllBook().subscribe((res) => {
    //   // console.log(res);
    //   this.bookList = res;
    // });
    // this._http
    //   .get<GetBookListInterface[]>(this.bookListUrl)
    //   .subscribe((res) => {
    //     // console.log(res);
    //     this.bookList = res;
    //   });
  }

  bookSearch(event: any) {
    // if we target in this Context, we have to change tex:string to text:any
    // const inputTextElement: HTMLInputElement = event.target
    
    // this._bookService.findAllBook().subscribe((response) => {
    //   this.bookList = response;
    //   this.filteredBooks = this.bookList.filter((book) => {
    //     const bookName = book.name.toLowerCase();
    //     const searchName = String(inputTextElement).toLowerCase();
    //     return bookName.indexOf(searchName) !== -1;
    //   });
    // });
    // console.log(text);
    // this.onInput.emit(text);
  }
}
