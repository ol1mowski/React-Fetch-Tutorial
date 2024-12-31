import { useState } from 'react';

export type User = {
  id: number;
  name: string;
  email: string;
};

export const GetUsers = () => {

  const [users, setUsers] = useState<User[]>([]);

  const handleGetUsers = async () => {
    const res = await fetch('http://localhost:3000/users');
    const data = await res.json();
    setUsers(data);
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Pobierz użytkowników</h2>
      <div className="space-y-4">
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          onClick={handleGetUsers}
        >
          Pobierz wszystkich użytkowników
        </button>
        <div className="bg-white p-4 rounded-md min-h-[200px]">
          {users.length > 0 ? (
            <ul>
              {users.map(user => (
                <li key={user.id}>{user.name} - {user.email}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">Brak danych do wyświetlenia...</p>
          )}
        </div>
      </div>
    </div>
  );
} 