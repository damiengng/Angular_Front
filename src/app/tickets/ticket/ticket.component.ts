import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TicketService } from 'src/services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
//import { StudentService } from '../../../services/ticket/student.service';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  ticket: Ticket;


  @Output()
  ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
  //ticketDeleted: EventEmitter<Ticket> = new EventEmitter();
  ticketHasBeenArchived: EventEmitter<Ticket> = new EventEmitter();

  //constructor(private studentService: StudentService) { }
  constructor(public ticketService: TicketService) { }
  ngOnInit() {
  }

  selectTicket() {
    this.ticketHasBeenSelected.emit(true);
  }

  /*deleteTicket() {
    this.ticketDeleted.emit(this.ticket);
  }*/
  archiveTicket(ticket: Ticket) {
    this.ticketHasBeenArchived.emit(this.ticket);
    this.ticketService.archiveTicket(ticket);

  }
  /*getStudentName(): string {
    const student = this.studentService.getStudentById(this.ticket.studentID);
    return student ? `${student.nom} ${student.prenom}` : 'Inconnu';
  }*/

}
