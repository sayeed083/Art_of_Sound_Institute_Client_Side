import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import GiveFeedBackPage from "../Pages/Dashboard/Admin/ManageClasses/GiveFeedBackPage";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses/MyClasses";
import MyEnrolledClass from "../Pages/Dashboard/Student/MyEnrolledClass/MyEnrolledClass";
import MySelectedClass from "../Pages/Dashboard/Student/MySelectedClass/MySelectedClass";
import Payment from "../Pages/Dashboard/Student/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Student/Payment/PaymentHistory";
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
          path: "myEnrolledClass",
          element: <MyEnrolledClass></MyEnrolledClass>
        },
        {
          path: "payment",
          element: <Payment></Payment>
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory></PaymentHistory>
        },

        //Instructor Side Routes
        {
          path: "addClass",
          element: <AddClass></AddClass>
        },
        {
          path: "myClasses",
          element: <MyClasses></MyClasses>
        },
        {
          path: "feedBack/:id",
          element: <GiveFeedBackPage></GiveFeedBackPage>,
          loader: ({params}) => fetch(`http://localhost:5000/classes/${params.id}`)
        },
        // Admin Side Routes :)
        {
          path: "allusers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: "manageClasses",
          element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        }
      ]
    }
  ]);