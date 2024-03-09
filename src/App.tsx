import "./App.css";
import Home from "./compontents/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskList from "./pages/TaskList";

import TaskBoard from "./pages/TaskBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <TaskBoard />,
      },
      {
        path: "/task",
        element: <TaskList />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
