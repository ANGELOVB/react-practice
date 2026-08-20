import type { BasePersonForm } from "./BasePersonForm";

export interface ProfessorForm extends BasePersonForm {
  especialidad: string;
  aniosServicio: number;
  tipoPlaza: string;
}
