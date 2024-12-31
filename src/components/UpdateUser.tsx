import { useState } from "react";

export const UpdateUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const handleUpdate = async () => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
  };

  return (
    <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
        Aktualizuj użytkownika
      </h2>
      <form className="space-y-4" onSubmit={handleUpdate}>
        <input
          type="number"
          placeholder="ID użytkownika"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full p-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="text"
          placeholder="Nowe imię"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
        >
          Aktualizuj użytkownika
        </button>
      </form>
    </div>
  );
};
