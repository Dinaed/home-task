import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './components/books/books.component';
import { BooksSpecificationComponent } from './components/books-specification/books-specification.component';
import { LibraryRoutingModule } from './library-routing.module';


@NgModule({
  imports: [
    CommonModule,
    LibraryRoutingModule
  ],
  declarations: [
    BooksComponent,
    BooksSpecificationComponent
  ]
})
export class LibraryModule { }
