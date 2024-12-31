import { useState } from "react";

export const DeleteUser = () => {
  const [id, setId] = useState("");

  const handleDelete = () => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="bg-red-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-red-800 mb-4">
        Usuń użytkownika
      </h2>
      <form className="space-y-4" onSubmit={handleDelete}>
        <input
          type="number"
          placeholder="ID użytkownika"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full p-2 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
        >
          Usuń użytkownika
        </button>
      </form>
    </div>
  );
};
