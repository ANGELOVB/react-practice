import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { BasePersonForm } from "../../../types/BasePersonForm";

interface Props {
  register: UseFormRegister<BasePersonForm>;
  errors: FieldErrors<BasePersonForm>;
}

export const PersonalInfoSection = ({ register, errors }: Props) => {
  return (
    <div className="space-y-4">
      <div>
        <label>Nombre</label>
        <input {...register("nombre")} className="input" />
        {errors.nombre && <p>{errors.nombre.message}</p>}
      </div>

      <div>
        <label>Apellido paterno</label>
        <input {...register("apellidoPaterno")} className="input" />
        {errors.apellidoPaterno && <p>{errors.apellidoPaterno.message}</p>}
      </div>

      <div>
        <label>Apellido materno</label>
        <input {...register("apellidoMaterno")} className="input" />
        {errors.apellidoMaterno && <p>{errors.apellidoMaterno.message}</p>}
      </div>

      <div>
        <label>Dirección</label>
        <input {...register("direccion")} className="input" />
        {errors.direccion && <p>{errors.direccion.message}</p>}
      </div>

      <div>
        <label>Fecha de nacimiento</label>
        <input type="date" {...register("fechaNacimiento")} className="input" />
        {errors.fechaNacimiento && <p>{errors.fechaNacimiento.message}</p>}
      </div>
    </div>
  );
};
