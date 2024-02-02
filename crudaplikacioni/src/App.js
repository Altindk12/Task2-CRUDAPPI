import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <h5>
        CRUD app that allows users to create, read, update, and delete data
      </h5>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">ListUsers</Link>
            </li>
            <li>
              <Link to="user/create"> Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
