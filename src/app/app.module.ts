import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component' ;
import { FormsModule } from '@angular/forms' ;
import { StudentComponent } from './components/student.component' ;
import { PageNotFoundComponent } from './components/PageNotFound.component' ;
import  {ChildComponent} from './components/child.component'
import { routing } from './app.routing';
 
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    StudentComponent,
    PageNotFoundComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,FormsModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
