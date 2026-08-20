import { create } from "zustand";
import type { Student } from "../types/Student";

interface StudentState {
  students: Student[];
  editing: Student | null;
  loading: boolean;
  setLoading: (v: boolean) => void;


  add: (data: Omit<Student, "id">) => Promise<void>;
  update: (data: Student) => Promise<void>;
  remove: (id: number) => Promise<void>;
  setEditing: (student: Student | null) => void;
}

export const useStudentStore = create<StudentState>((set) => ({
  students: [],
  editing: null,
  loading: false,

  setLoading: (value) => set({ loading: value }),

  add: async (data) => {
    set({ loading: true });
    await new Promise((r) => setTimeout(r, 800)); // Simulación API

    set((state) => ({
      students: [...state.students, { id: Date.now(), ...data }],
      loading: false,
    }));
  },

  update: async (data) => {
    set({ loading: true });
    await new Promise((r) => setTimeout(r, 800));

    set((state) => ({
      students: state.students.map((s) =>
        s.id === data.id ? data : s
      ),
      loading: false,
    }));
  },

  remove: async (id) => {
    set({ loading: true });
    await new Promise((r) => setTimeout(r, 800));

    set((state) => ({
      students: state.students.filter((s) => s.id !== id),
      loading: false,
    }));
  },

  setEditing: (student) => set({ editing: student }),
}));
