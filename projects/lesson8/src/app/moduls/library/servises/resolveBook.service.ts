import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Book } from '../components/models/book';
import { LibraryService } from './library.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveBookService implements Resolve<any>{

constructor( private library:LibraryService, private router: Router ) { }
  
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book | undefined> {
    let bookId = Number(route.params['id']);
    return this.library.getBookById(bookId).pipe(map((book) => {
      if(book){
        return book;
      }
      else {
        this.router.navigate(['not-found']);
        return;
      }
    }))
  }

}
