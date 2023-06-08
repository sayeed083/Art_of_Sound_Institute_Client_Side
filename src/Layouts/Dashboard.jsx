import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaUsers } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {

    
    // const isAdmin = true;
    // const isInstructor = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className="drawer  lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-teal-600">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/manageClasses"><FaHome></FaHome> Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> Manage Users</NavLink></li>

                        </> :

                            isInstructor ? <>
                                <li><NavLink to="/dashboard/addClass"> <FaUtensils></FaUtensils> Add A Class</NavLink></li>
                                <li><NavLink to="/dashboard/myClasses"> <FaUtensils></FaUtensils> My Classes</NavLink></li>

                            </> :


                                <>
                                    <li><NavLink to="/dashboard/mySelectedClass"><FaShoppingCart></FaShoppingCart> My Selected Class</NavLink></li>
                                    <li><NavLink to="/dashboard/myEnrolledClass"><FaCalendarAlt></FaCalendarAlt> My Enrolled Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/payment"><FaHome></FaHome> Payment</NavLink></li>
                                    <li><NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                                </>
                    }




                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;