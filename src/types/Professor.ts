export interface Professor {
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
  especialidad: string;
  aniosServicio: number;
  tipoPlaza: string;
}
