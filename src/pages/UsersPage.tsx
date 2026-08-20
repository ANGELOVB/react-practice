import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import UsersForm from "../components/forms/UsersForm";
import UsersTable from "../components/UsersTable";
import Modal from "../components/Modal";
import type { User } from "../types/User";
import Spinner from "../components/Spinner";
import FullScreenLoader from "../components/FullScreenLoader";

type UserFormData = { name: string; email: string };

const UsersPage = () => {
  const { users, loading, error, addUser, removeUser, setUsers } = useUsers();

  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleSave = (updatedUser: User) => {
    const newList = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );

    setUsers(newList);
    setEditingUser(null);
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <FullScreenLoader loading={loading} />
      <h1 className="text-3xl font-bold mb-4">Usuarios</h1>

      <UsersForm onSubmit={addUser} submitText="Agregar usuario" />

      <Modal open={!!editingUser} onClose={() => setEditingUser(null)}>
        { (
          editingUser && (
            <UsersForm
              initialData={editingUser}
              submitText="Guardar cambios"
              onSubmit={(updated) =>
                handleSave({ ...editingUser!, ...updated })
              }
            />
          )
        )}
      </Modal>

      <UsersTable
        users={users}
        onDelete={removeUser}
        onEdit={(user) => setEditingUser(user)}
      />
    </div>
  );
};

export default UsersPage;
