// components
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Foother from "../components/Foother";
import { Toaster } from "react-hot-toast";

function RooutLayout({furniture, setOpenIndex, openIndex}) {
  return (
    <>
      <Toaster />
      <section className="shadow-md">
        <Navbar furniture={furniture} />
      </section>

      <main>
        <Outlet />
      </main>

      <section>
        <Foother setOpenIndex={setOpenIndex} openIndex={openIndex} /> 
      </section>
    </>
  );
}

export default RooutLayout;
