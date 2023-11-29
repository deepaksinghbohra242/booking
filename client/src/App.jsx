import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LoginForm from "./components/user/LoginForm";
import RegisterForm from "./components/user/RegisterForm";
import axios from "axios";
import { UserContextProvider } from "./UserLayout";
import Home from "./components/home/Home";
import Room from "./components/hotel/Room";
import Welcome from "./components/home/Welcome";
import Flat from "./components/hotel/Flat";
import Profile from "./components/menu/Profile";
import PhotoPage from "./components/utils/photoPage";


axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/uploadPhoto" element={<PhotoPage />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/room" element={<Room />} />
            <Route path="/" element={<Welcome />} />
            <Route path="/flat" element={<Flat />} />
            <Route path="/profile/:subpage?" element={<Profile />} />
            <Route path="/profile/:subpage/:action" element={<Profile />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}
