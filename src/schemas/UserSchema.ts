import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("Correo inválido"),
});

export type UserFormData = z.infer<typeof UserSchema>;
