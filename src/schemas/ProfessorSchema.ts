import { z } from "zod";

export const professorSchema = z.object({
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
  correoElectronico: z
    .string()
    .email("El correo electrónico no es válido"),

  // Campos particulares del profesor
  especialidad: z.string().min(1, "La especialidad es obligatoria"),
  aniosServicio: z
    .number()
    .min(0, "Debe ser un número positivo"),
  tipoPlaza: z.string().min(1, "El tipo de plaza es obligatorio"),
});

// Type inferido automáticamente
export type ProfessorForm = z.infer<typeof professorSchema>;
