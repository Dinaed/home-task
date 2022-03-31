import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardBookService, NotFoundComponent } from 'projects/common/src/public-api';
import { BooksSpecificationComponent } from './components/books-specification/books-specification.component';
import { BooksComponent } from './components/books/books.component';
import { ResolveBookService } from './servises/resolveBook.service';

const routes: Routes = [
  {
    path:'',
    component: BooksComponent,
    canActivateChild:[GuardBookService],
    children:[
      {
        path: ':id',
        component: BooksSpecificationComponent,
        resolve:{
          book: ResolveBookService
        }
      }
    ]
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
