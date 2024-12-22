// components
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Foother from "../components/Foother";

function RooutLayout({setOpenIndex, openIndex}) {
  return (
    <>
      <section className="shadow-md">
        <Navbar />
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
