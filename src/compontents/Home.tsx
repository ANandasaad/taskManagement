import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

const Home = () => {
  return (
    <div className="public-container ">
      <div className="">
        <div className="">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
