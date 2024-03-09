import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavBar />

      <Outlet />
    </div>
  );
};

export default Main;
