import { create } from "zustand";
import type { Professor } from "../types/Professor";

interface ProfessorState {
  professors: Professor[];
  editing: Professor | null;

  add: (data: Omit<Professor, "id">) => void;
  update: (data: Professor) => void;
  remove: (id: number) => void;
  setEditing: (prof: Professor | null) => void;
}

export const useProfessorStore = create<ProfessorState>((set) => ({
  professors: [],
  editing: null,

  add: (data) =>
    set((state) => ({
      professors: [
        ...state.professors,
        { id: Date.now(), ...data },
      ],
    })),

  update: (data) =>
    set((state) => ({
      professors: state.professors.map((p) =>
        p.id === data.id ? data : p
      ),
    })),

  remove: (id) =>
    set((state) => ({
      professors: state.professors.filter((p) => p.id !== id),
    })),

  setEditing: (prof) => set({ editing: prof }),
}));
