import {
  Component,
  OnInit,
} from '@angular/core';
import { StudentService } from 'src/app/student.service';
interface Student {
  id: string;
  name: string;
  sex: string;
  age: number;
  phone: string;
  email: string;
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.showStudents();
  }

  showStudents() {
    this.studentService.getStudents().subscribe(
      (data: Array<Student>) => {
        this.students = data;
      }
    );
  }

  addStudents(){
    this.studentService.addStudents(Student).subscribe(
      hero => this.heroes.push(hero));
  }

  //修改的咋写
 
}
