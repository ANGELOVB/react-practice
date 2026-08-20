import { useState } from "react";
import { useStudentStore } from "../stores/student.store";
import type { Student } from "../types/Student";
import { StudentFormComponent } from "../components/forms/StudentForm";
import FullScreenLoader from "../components/FullScreenLoader";
import AnimatedModal from "../components/Modal";

export const StudentsPage = () => {
  const { students, remove, setEditing, loading } = useStudentStore();
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    setEditing(null);
    setOpen(true);
  };

  const handleEdit = (student: Student) => {
    setEditing(student);
    setOpen(true);
  };

  // Loader PRO
  if (loading) return <FullScreenLoader loading={loading} />;

  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Alumnos</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={handleAdd}
        >
          + Agregar alumno
        </button>
      </div>

      {/* Tabla */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left border-b font-medium">Nombre</th>
              <th className="p-3 text-left border-b font-medium">Grado</th>
              <th className="p-3 text-left border-b font-medium">Teléfono</th>
              <th className="p-3 text-left border-b font-medium">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-b">
                <td className="p-3">{s.nombre} {s.apellidoPaterno}</td>
                <td className="p-3">{s.grado}</td>
                <td className="p-3">{s.telefono}</td>
                <td className="p-3 flex gap-2">
                  <button
                    className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 transition"
                    onClick={() => handleEdit(s)}
                  >
                    Editar
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition"
                    onClick={() => remove(s.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal animado */}
      <AnimatedModal open={open} onClose={() => setOpen(false)}>
        <h2 className="text-xl font-bold mb-4">
          {useStudentStore.getState().editing ? "Editar alumno" : "Agregar alumno"}
        </h2>

        <StudentFormComponent onFinish={() => setOpen(false)} />
      </AnimatedModal>
    </div>
  );
};
