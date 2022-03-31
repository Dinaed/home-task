import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'projects/common/src/public-api';
import { AboutComponent } from './components/about/about.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {
    path:'',
    component: StartComponent
  },
  {
    path:'books',
    loadChildren: () => import ('./moduls/library/library.module').then(item => item.LibraryModule) 
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'not-found',
    component: NotFoundComponent
  },
  {
    path:'**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
