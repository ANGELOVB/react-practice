import type { FieldValues } from "react-hook-form";

export interface BasePersonForm extends FieldValues {
  nombre: string;
  apellidoMaterno: string;
  apellidoPaterno: string;
  direccion: string;
  fechaNacimiento: string;
  telefono: string;
  correoElectronico: string;
}
