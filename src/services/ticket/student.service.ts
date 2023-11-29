import { Student } from '../../models/student.models';
import { STUDENTS_MOCKED } from '../../mocks/students.mock';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private studentList: Student[] = STUDENTS_MOCKED;
    public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

    apiURL = 'http://localhost:9428';

    constructor(private http: HttpClient) {
    }
    getStudent(): void {
        this.http.get<Student[]>(this.apiURL)
            .subscribe(
                (students: Student[]) => {
                    this.studentList = students;
                    this.students$.next(this.studentList);
                },
                error => {
                    console.error('Erreur lors de la requête GET:', error);
                }
            );
    }
}
