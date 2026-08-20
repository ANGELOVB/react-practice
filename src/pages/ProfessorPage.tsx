import { useState } from "react";
import { useProfessorStore } from "../stores/professor.store";
import { ProfessorFormComponent } from "../components/forms/ProfessorForm";
import type { Professor } from "../types/Professor";

export const ProfessorsPage = () => {
  const { professors, remove, setEditing } = useProfessorStore();
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    setEditing(null);
    setOpen(true);
  };

  const handleEdit = (prof: Professor) => {
    setEditing(prof);
    setOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Profesores</h1>
        <button className="btn-primary" onClick={handleAdd}>
          Agregar profesor
        </button>
      </div>

      {/* Tabla */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Nombre</th>
            <th className="p-2">Especialidad</th>
            <th className="p-2">Teléfono</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {professors.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.nombre} {p.apellidoPaterno}</td>
              <td className="p-2">{p.especialidad}</td>
              <td className="p-2">{p.telefono}</td>
              <td className="p-2 flex gap-2">
                <button className="btn-secondary" onClick={() => handleEdit(p)}>
                  Editar
                </button>
                <button className="btn-danger" onClick={() => remove(p.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {open && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setOpen(false)}>
              X
            </button>

            <ProfessorFormComponent onFinish={() => setOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};
