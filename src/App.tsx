import "./App.css";
import Home from "./compontents/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskList from "./pages/TaskList";
import Main from "./compontents/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/main",
    element: <Main />,
    children: [
      {
        path: "task",
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
