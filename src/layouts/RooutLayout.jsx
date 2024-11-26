// components
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Foother from "../components/Foother";

function RooutLayout() {
  return (
    <>
      <section>
        <Navbar />
      </section>

      <main>
        <Outlet />
      </main>

      <section>
        <Foother />
      </section>
    </>
  );
}

export default RooutLayout;
