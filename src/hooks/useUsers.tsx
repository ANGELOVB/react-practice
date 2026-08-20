import { useEffect, useState } from "react";
import { getUsers, createUser, deleteUser } from "../services/UsersService";
import toast from "react-hot-toast";

export const useUsers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await getUsers();
      setUsers(data);
    } catch (err: any) {
      toast.error("Error al cargar usuarios");
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  const addUser = async (user: any) => {
    try {
      setLoading(true);
      const newUser = await createUser(user);
      setUsers([...users, newUser]);
      toast.success("Usuario agregado");
    } catch {
      toast.error("No se pudo agregar el usuario");
    } finally {
      setLoading(false);
    }
  };

  const removeUser = async (id: number) => {
    try {
      setLoading(true);
      await deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
      toast.success("Usuario eliminado");
    } catch {
      toast.error("No se pudo eliminar el usuario");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    loadUsers();
  }, []);

  return {
    users,
    loading,
    error,
    addUser,
    removeUser,
    setUsers, // ← ⭐ NECESARIO para edición
  };
};
