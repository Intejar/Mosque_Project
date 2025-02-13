import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Gallery from "../Pages/Gallery";
import Vlog from "../Pages/Vlog";
import Membership from "../Membership/membership";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/gallery",
    element: <Gallery></Gallery>,
  },
  {
    path: "/vlog",
    element: <Vlog></Vlog>,
  },
  {
    path: "/membership",
    element: <Membership></Membership>,
  },
]);

export default router;
