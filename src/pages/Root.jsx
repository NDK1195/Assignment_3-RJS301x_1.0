import { Outlet } from "react-router-dom";
import Footer from "../components/UI/Footer";
import NavBar from "../components/UI/NavBar";
export default function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
