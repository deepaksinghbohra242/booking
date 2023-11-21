import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LoginForm from "./components/user/LoginForm";
import RegisterForm from "./components/user/RegisterForm";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>
      </Routes>
    </>
  );
}
