import { IoHomeOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav className="">
        <ul className="flex justify-between items-center gap-5 border">
          <div className="px-3 py-2">
            <img
              src="https://www.clixlogix.com/wp-content/uploads/2022/06/cliqx-logo-1.svg"
              className="w-72 h-10"
              alt="logo"
            />
          </div>
          <Link to="/">
            {" "}
            <li className="py-2 flex items-center justify-start gap-2 text-2xl hover:bg-gray-100 px-2 rounded-lg">
              Task Home
            </li>
          </Link>{" "}
          <Link to="/main/task">
            {" "}
            <li className="py-2 flex items-center justify-start gap-2 text-xl hover:bg-gray-100 px-2 rounded-lg">
              {" "}
              <span>
                <IoHomeOutline />
              </span>
              Task List
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
