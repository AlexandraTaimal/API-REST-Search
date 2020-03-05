import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  studentsList:Student[] = [];

  constructor(private studentService: StudentService) { }
  
  filterStudent = '';

  ngOnInit() {
      
    this.studentService.getStudents('https://jsonplaceholder.typicode.com/todos').subscribe((resp: any) => {

      var i: number;
      for (i = 0; i < resp.length; i++) {
        var s: Student = new Student();
        s.id        = resp[i].id;
        s.name      = resp[i].title;
        s.isActive  = resp[i].completed;
        
        this.studentsList.push(s);
      }
      
      console.log(this.studentsList);
    });

  }

}  

