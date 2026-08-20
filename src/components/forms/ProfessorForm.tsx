import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { ProfessorForm } from "../../types/ProfessorForm";
import { professorSchema } from "../../schemas/ProfessorSchema";

import { PersonalInfoSection } from "./sections/PersonalInfoSection";
import { ContactSection } from "./sections/ContactSection";

import { useProfessorStore } from "../../stores/professor.store";

interface Props {
  onFinish?: () => void;
}

export const ProfessorFormComponent = ({ onFinish }: Props) => {
  const { add, update, editing, setEditing } = useProfessorStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfessorForm>({
    resolver: zodResolver(professorSchema),
    defaultValues: editing ?? {},
  });

  const onSubmit = (data: ProfessorForm) => {
    if (editing) {
      update({ ...editing, ...data });
    } else {
      add(data);
    }

    setEditing(null);
    onFinish?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Secciones reutilizables */}
      <PersonalInfoSection register={register} errors={errors} />
      <ContactSection register={register} errors={errors} />

      {/* Campos particulares del profesor */}
      <div>
        <label className="font-medium">Especialidad</label>
        <input {...register("especialidad")} className="input" />
        {errors.especialidad && (
          <p className="text-red-500 text-sm">{errors.especialidad.message}</p>
        )}
      </div>

      <div>
        <label className="font-medium">Años de servicio</label>
        <input
          type="number"
          {...register("aniosServicio", { valueAsNumber: true })}
          className="input"
        />
        {errors.aniosServicio && (
          <p className="text-red-500 text-sm">{errors.aniosServicio.message}</p>
        )}
      </div>

      <div>
        <label className="font-medium">Tipo de plaza</label>
        <input {...register("tipoPlaza")} className="input" />
        {errors.tipoPlaza && (
          <p className="text-red-500 text-sm">{errors.tipoPlaza.message}</p>
        )}
      </div>

      <button className="btn-primary w-full">
        {editing ? "Actualizar profesor" : "Agregar profesor"}
      </button>
    </form>
  );
};
