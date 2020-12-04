import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  studentsUrl='/web/students'

  configUrl = 'assets/config.json';

getStudents() {
  return this.http.get(this.studentsUrl);
}

}
