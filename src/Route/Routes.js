import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },

  // {
  //     path:'*',
  //     element:<NotFound></NotFound>
  // }
]);

export default router;
