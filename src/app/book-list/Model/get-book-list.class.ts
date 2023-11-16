import { GetBookListInterface } from './get-book-list.interface';

export class GetBookListClass implements GetBookListInterface {
  public url: string;
  public name: string;
  public isbn: string;
  public authors: string[];

  constructor(url: string, name: string, isbn: string, authors: string[]) {
    this.url = url;
    this.name = name;
    this.isbn = isbn;
    this.authors = authors;
  }
}
