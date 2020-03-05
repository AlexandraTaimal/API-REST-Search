import { Injectable } from '@angular/core';
import { Student } from '../classes/student';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(url: string){
    return this.http.get(url);
  }

}
