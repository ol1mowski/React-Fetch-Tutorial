import { CreateUser } from "./components/CreateUser";
import { DeleteUser } from "./components/DeleteUser";
import { GetUsers } from "./components/GetUsers";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { UpdateUser } from "./components/UpdateUser";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-4 space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          React Fetch -{" "}
          <span className="text-blue-500">Oliwier Markiewicz</span>
        </h1>
        <nav className="flex justify-center space-x-4">
          <Link
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            to="/"
          >
            Pobierz użytkowników LINK
          </Link>
          <Link
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
            to="/create"
          >
            Dodaj użytkownika LINK
          </Link>
          <Link
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
            to="/update"
          >
            Aktualizuj użytkownika LINK
          </Link>
          <Link
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
            to="/delete"
          >
            Usuń użytkownika LINK
          </Link>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Routes>
            <Route path="/" element={<GetUsers />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/update" element={<UpdateUser />} />
            <Route path="/delete" element={<DeleteUser />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
