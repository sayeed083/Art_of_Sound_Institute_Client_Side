import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";


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
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "register",
            element: <Register></Register>
        },
        
      ]
    },
  ]);