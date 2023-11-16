import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetBookListClass } from '../Model/get-book-list.class';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { GetBookListInterface } from '../Model/get-book-list.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}
  private readonly _http = inject(HttpClient);

  findAllBook(): Observable<GetBookListInterface[]> {
    return this._http.get<GetBookListInterface[]>(environment.basedApiUrl + '/book');
  }
}
