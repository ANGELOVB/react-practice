import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserSchema } from "../../schemas/UserSchema"
import type { UserFormData } from "../../schemas/UserSchema";

interface Props {
  initialData?: UserFormData;
  onSubmit: (data: UserFormData) => void;
  submitText?: string;
}

const UserForm = ({ initialData, onSubmit, submitText = "Guardar" }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(UserSchema),
    defaultValues: initialData ?? {
      name: "",
      email: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("name")}
          className="w-full border rounded px-3 py-2"
          placeholder="Nombre"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          className="w-full border rounded px-3 py-2"
          placeholder="Correo"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
      >
        {submitText}
      </button>
    </form>
  );
};

export default UserForm;
