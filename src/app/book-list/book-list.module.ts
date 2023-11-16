import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetBookListComponent } from './Components/get-book-list/get-book-list.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { HttpBookDirective } from './http-book.directive';


@NgModule({
  declarations: [
    GetBookListComponent,
    HttpBookDirective,
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule
  ],
  exports: [
    GetBookListComponent,
  ]
})
export class BookListModule { }
