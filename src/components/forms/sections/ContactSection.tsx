import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { BasePersonForm } from "../../../types/BasePersonForm";

interface Props {
  register: UseFormRegister<BasePersonForm>;
  errors: FieldErrors<BasePersonForm>;
}

export const ContactSection = ({ register, errors }: Props) => {
  return (
    <div className="space-y-4">
      <div>
        <label>Teléfono</label>
        <input {...register("telefono")} className="input" />
        {errors.telefono && <p>{errors.telefono.message}</p>}
      </div>

      <div>
        <label>Correo electrónico</label>
        <input {...register("correoElectronico")} className="input" />
        {errors.correoElectronico && <p>{errors.correoElectronico.message}</p>}
      </div>
    </div>
  );
};
