import { Ticket, Major } from '../models/ticket';
import { STUDENTS_MOCKED } from './students.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Amsterdam',
    description: '',
    date: dateToday,
    student: STUDENTS_MOCKED[0],
    major: Major.Informatique,
    archived: true
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[1],
    major: Major.Physique,
    archived: false
  },
  {
    title: 'SI6 in London',
    description: 'here we go',
    date: dateToday,
    student: STUDENTS_MOCKED[2],
    major: Major.Mathématiques,
    archived: false
  },
];



