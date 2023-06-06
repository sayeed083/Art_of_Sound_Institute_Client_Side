import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import Home from "../Pages/Home/Home/Home";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "allInstructors",
            element: <AllInstructors></AllInstructors>
        },
        {
            path: "allClasses",
            element: <AllClasses></AllClasses>
        },
      ]
    },
  ]);