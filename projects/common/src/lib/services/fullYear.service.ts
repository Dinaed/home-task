import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullYearService {

  public fullYear: number = 18;
constructor() { }

public age: number = 0;
public message:string='';

public isAge(){
  if(this.age >= this.fullYear){
    this.message = 'You can see the books';
    return true
  }
  else{
    this.message = 'You can not see the books';
    return false;
  }
}
}
