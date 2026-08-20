interface Props {
  users: any[];
  onDelete: (id: number) => void;
  onEdit: (user: any) => void;
}

const UsersTable = ({ users, onDelete, onEdit }: Props) => {
  return (
    <table className="min-w-full bg-white border border-purple-300 rounded-xl shadow-lg">
      <thead className="bg-purple-600 text-white">
        <tr>
          <th className="px-4 py-3 text-left">ID</th>
          <th className="px-4 py-3 text-left">Nombre</th>
          <th className="px-4 py-3 text-left">Email</th>
          <th className="px-4 py-3 text-left">Acciones</th>
        </tr>
      </thead>

      <tbody>
        {users.map((u) => (
          <tr key={u.id} className="hover:bg-purple-50 border-b">
            <td className="px-4 py-3">{u.id}</td>
            <td className="px-4 py-3">{u.name}</td>
            <td className="px-4 py-3">{u.email}</td>
            <td className="px-4 py-3 flex gap-2">
              <button
                onClick={() => onEdit(u)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Editar
              </button>

              <button
                onClick={() => onDelete(u.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
