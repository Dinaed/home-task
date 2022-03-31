import { Component } from '@angular/core';
import { FullYearService } from 'projects/common/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson7';
  constructor(public isFullYear:FullYearService){ }
  
}
