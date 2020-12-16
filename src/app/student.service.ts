import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private http: HttpClient) { }

  studentsUrl = '/web/students'

   studentadd = 'web/addstudent'

  configUrl = 'assets/config.json';

 

  

  getStudents() {
    return this.http.get(this.studentsUrl);
  }



  addStudents (stu: Student): Observable<Student>{
    return this.http.post(this.studentadd, stu, httpOptions)
  }

}
