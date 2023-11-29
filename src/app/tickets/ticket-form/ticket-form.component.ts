import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Major, Ticket } from '../../../models/ticket';
import { StudentService } from '../../../services/ticket/student.service';
import { Student } from 'src/models/student.models';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /*
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;
  public majorList: String[] = Object.values(Major);
  public Student_List: Student[] = [];

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService, public studentService: StudentService) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.maxLength(200)],
      major: [''],
      studentID: ['']
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
    this.studentService.students$.subscribe((students) => this.Student_List = students);
  }

  ngOnInit() {
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    ticketToCreate.archived = false;
    const studentID = this.ticketForm.get('studentID')!.value;
    // console.log('studentID:', studentID);
    // console.log('Student_List:', this.Student_List);
    ticketToCreate.student = this.Student_List.find(student => student.id == studentID);
    this.ticketService.addTicket(ticketToCreate);
  }
}

