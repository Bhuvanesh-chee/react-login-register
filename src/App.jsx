import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </>
  );
}
