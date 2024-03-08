import TaskBoard from "../pages/TaskBoard";

import Main from "./Main";

const Home = () => {
  return (
    <div className="public-container ">
      <div className="">
        <div className="">
          <Main />
          <TaskBoard />
        </div>
      </div>
    </div>
  );
};

export default Home;
