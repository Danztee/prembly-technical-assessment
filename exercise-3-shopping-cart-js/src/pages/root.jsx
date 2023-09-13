import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
