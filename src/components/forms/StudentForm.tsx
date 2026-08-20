import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { StudentForm } from "../../types/StudentForm"
import { studentSchema } from "../../schemas/StudentSchema";

import { PersonalInfoSection } from "./sections/PersonalInfoSection";
import { ContactSection } from "./sections/ContactSection";

import { useStudentStore } from "../../stores/student.store";

interface Props {
  onFinish?: () => void;
}
export const StudentFormComponent = ({ onFinish }: Props) => {
  const { add, update, editing, setEditing } = useStudentStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentForm>({
    resolver: zodResolver(studentSchema),
    defaultValues: editing ?? {},
  });

  const onSubmit = (data: StudentForm) => {
    editing ? update({ ...editing, ...data }) : add(data);
    setEditing(null);
    onFinish?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="card space-y-4">
        <PersonalInfoSection register={register} errors={errors} />
      </div>

      <div className="card space-y-4">
        <ContactSection register={register} errors={errors} />
      </div>

      <div className="card space-y-4">
        <div>
          <label className="font-medium">Grado</label>
          <input {...register("grado")} className="input" />
          {errors.grado && <p className="text-red-500 text-sm">{errors.grado.message}</p>}
        </div>

        <div>
          <label className="font-medium">Turno</label>
          <input {...register("turno")} className="input" />
          {errors.turno && <p className="text-red-500 text-sm">{errors.turno.message}</p>}
        </div>

        <div>
          <label className="font-medium">Taller</label>
          <input {...register("taller")} className="input" />
          {errors.taller && <p className="text-red-500 text-sm">{errors.taller.message}</p>}
        </div>
      </div>

      <button className="btn-primary w-full">
        {editing ? "Actualizar alumno" : "Agregar alumno"}
      </button>
    </form>
  );
};
