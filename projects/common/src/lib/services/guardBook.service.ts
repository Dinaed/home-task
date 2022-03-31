import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FullYearService } from './fullYear.service';

@Injectable({
  providedIn: 'root'
})
export class GuardBookService implements CanActivateChild{

constructor(private isFullYear:FullYearService) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.isFullYear.isAge();
  }
}
