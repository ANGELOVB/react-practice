import type { BasePersonForm } from "./BasePersonForm";

export interface StudentForm extends BasePersonForm {
  grado: string;
  turno: string;
  taller: string;
}
