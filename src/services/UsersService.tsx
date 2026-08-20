const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error fetching users");
  return res.json();
};

export const createUser = async (user: any) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error("Error creating user");
  return res.json();
};

export const deleteUser = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error deleting user");
  return true;
};
