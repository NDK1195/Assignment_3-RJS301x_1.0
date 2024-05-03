import { Outlet } from "react-router-dom";
import Footer from "../components/UI/Footer";
import NavBar from "../components/UI/NavBar";
import ScrollToTop from "../components/UI/ScrollToTop";
export default function Root() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
