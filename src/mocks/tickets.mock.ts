import { Ticket, Major } from '../models/ticket';
//import { Student } from '../models/student.models';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Amsterdam',
    description: '',
    date: dateToday,
    //studentID: 1,
    student: 'damien',
    major: Major.Informatique,
    archived: true
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    //studentID: 2,
    student: 'toto',
    major: Major.Physique,
    archived: false
  },
];



