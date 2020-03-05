import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { StudentService } from './services/student.service';

import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    FilterPipe,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule,
    RouterModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
