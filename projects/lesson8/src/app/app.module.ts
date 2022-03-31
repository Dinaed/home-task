import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModuleSef } from 'projects/common/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { StartComponent } from './components/start/start.component';

@NgModule({
  declarations: [		
    AppComponent,
    StartComponent,
    AboutComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModuleSef
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
