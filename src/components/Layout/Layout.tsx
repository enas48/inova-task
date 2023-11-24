import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <main className="bg-[#0a0a0a] h-full w-full layout">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
