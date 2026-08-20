export interface Student {
  id: number;

  // Campos comunes
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  direccion: string;
  fechaNacimiento: string;
  telefono: string;
  correoElectronico: string;

  // Campos particulares
  grado: string;
  turno: string;
  taller: string;
}
