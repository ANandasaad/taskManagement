import { IoHomeOutline } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import { IoMdPeople } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="border bg-gray-50">
      <div className="px-3 py-2">
        <img
          src="https://www.clixlogix.com/wp-content/uploads/2022/06/cliqx-logo-1.svg"
          className="w-72 h-10"
          alt="logo"
        />
      </div>
      <div>
        <ul className="px-3 py-2">
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
          <li className="py-2 flex items-center justify-start gap-2 text-xl  hover:bg-gray-100 px-2 rounded-lg">
            {" "}
            <span>
              <LuClipboardList />
            </span>
            Task Board
          </li>
          <li className="py-2 flex items-center justify-start gap-2 text-xl  hover:bg-gray-100 px-2 rounded-lg">
            {" "}
            <span>
              <IoMdPeople />
            </span>
            Teams
          </li>
          <li className="py-2 flex items-center justify-start gap-2 text-xl  hover:bg-gray-100 px-2 rounded-lg">
            {" "}
            <span>
              <IoSettingsOutline />
            </span>
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
