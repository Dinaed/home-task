import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../../servises/library.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  library:Book[] = [];

  constructor(private librery:LibraryService, private router: Router) { }

  ngOnInit() {
    this.librery.books.subscribe((book) => {
      this.library = book;
    });
  }
  show(book: Book){
    this.router.navigate(['/books', book.id])
  }
}
