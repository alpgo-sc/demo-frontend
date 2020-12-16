import {
  Component,
  OnInit,
} from '@angular/core';
import { StudentService } from 'src/app/student.service';
interface Student{
  id:string;
  name:string;
  sex:string;
  age:number;
  phone:string;
  email:string;
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.showStudents();

    addRow(): void {
      this.listOfData = [
        ...this.listOfData,
        {
          id: `${this.i}`,
          name: `Edward King ${this.i}`,
          age: '32',
          address: `London, Park Lane no. ${this.i}`
        }
      ];
      this.i++;
    }
  }

  showStudents() {
    this.studentService.getStudents().subscribe(
        (data: Array<Student>) => {
        this.students = data;
        
      }
      );
  }

}
