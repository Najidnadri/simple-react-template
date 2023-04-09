import Home from "../pages/home";
import About from "../pages/about";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    }
]);