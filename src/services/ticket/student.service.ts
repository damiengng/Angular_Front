import { Student } from '../../models/student.models';
import { STUDENTS_MOCKED } from '../../mocks/students.mock';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private studentList: Student[] = STUDENTS_MOCKED;
    public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

    getStudents(): Student[] {
        return STUDENTS_MOCKED;
    }
    constructor() {

    }
}
