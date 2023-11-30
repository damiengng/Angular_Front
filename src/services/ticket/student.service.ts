import { Student } from '../../models/student.models';
import { STUDENTS_MOCKED } from '../../mocks/students.mock';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class StudentService {
    //private studentList: Student[] = STUDENTS_MOCKED;
    private studentList: Student[] = [];
    public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

    url = 'http://localhost:9428/api/students/';

    constructor(private http: HttpClient) {
    }

    getStudent(): Observable<Student[]> {
        return this.http.get<Student[]>(this.url);
    }
}
