import { z } from "zod";

export const studentSchema = z.object({
  // Sección PersonalInfoSection
  nombre: z.string().min(1, "El nombre es obligatorio"),
  apellidoPaterno: z.string().min(1, "El apellido paterno es obligatorio"),
  apellidoMaterno: z.string().min(1, "El apellido materno es obligatorio"),
  direccion: z.string().min(1, "La dirección es obligatoria"),
  fechaNacimiento: z.string().min(1, "La fecha de nacimiento es obligatoria"),

  // Sección ContactSection
  telefono: z
    .string()
    .min(10, "El teléfono debe tener al menos 10 dígitos")
    .max(15, "El teléfono es demasiado largo"),
  correoElectronico: z.string().email("El correo electrónico no es válido"),

  // Campos particulares del alumno
  grado: z.string().min(1, "El grado es obligatorio"),
  turno: z.string().min(1, "El turno es obligatorio"),
  taller: z.string().min(1, "El taller es obligatorio"),
});

export type StudentForm = z.infer<typeof studentSchema>;
