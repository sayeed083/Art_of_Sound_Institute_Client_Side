import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import MySelectedClass from "../Pages/Dashboard/Student/MySelectedClass/MySelectedClass";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";


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
            element:  <AllClasses></AllClasses>
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
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        
        {
          path: "mySelectedClass",
          element: <MySelectedClass></MySelectedClass>
        },
        {
          path: "addClass",
          element: <AddClass></AddClass>
        },
        {
          path: "allusers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);