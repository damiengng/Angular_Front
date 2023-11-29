import { Student } from '../models/student.models';

export enum Major {
  Informatique = 'Informatique',
  Biologie = 'Biologie',
  Physique = 'Physique',
  Mathématiques = 'Mathématiques',
  Économie = 'Économie'
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  major?: Major;
  archived?: boolean;
  student?: Student;
}
