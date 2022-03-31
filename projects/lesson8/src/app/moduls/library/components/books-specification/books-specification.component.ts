import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params} from '@angular/router';
import { LibraryService } from '../../servises/library.service';
import { Book } from '../models/book';



@Component({
  selector: 'app-books-specification',
  templateUrl: './books-specification.component.html',
  styleUrls: ['./books-specification.component.css']
})
export class BooksSpecificationComponent implements OnInit {

  book1: Book | undefined;

  constructor(private route: ActivatedRoute, private library: LibraryService) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.book1 = data['book'];
    });
  }
}
