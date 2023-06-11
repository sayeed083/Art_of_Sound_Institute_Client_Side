import { NavLink, Outlet } from "react-router-dom";
import { HiAcademicCap } from "react-icons/hi";
import { HiBuildingLibrary } from "react-icons/hi2";
import { SiGoogleclassroom } from "react-icons/si";
import {  FaWallet,  FaHome, FaUsers, FaRegClipboard, FaBuilding } from 'react-icons/fa';
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
            <div className="drawer-side bg-sky-500" style={{ backgroundImage: `url(${"https://i.postimg.cc/P5FyLMFy/blue-painted-vinyl-arrangement-with-copy-space.jpg"})` }}>
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/manageClasses"><HiBuildingLibrary></HiBuildingLibrary> Manage Classes</NavLink></li> 
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> Manage Users</NavLink></li>

                        </> :

                            isInstructor ? <>
                                <li><NavLink to="/dashboard/addClass"><HiAcademicCap></HiAcademicCap> Add A Class</NavLink></li>
                                <li><NavLink to="/dashboard/myClasses"><SiGoogleclassroom></SiGoogleclassroom> My Classes</NavLink></li>

                            </> :


                                <>
                                    <li><NavLink to="/dashboard/mySelectedClass"><FaRegClipboard></FaRegClipboard> My Selected Class</NavLink></li>
                                    <li><NavLink to="/dashboard/myEnrolledClass"><FaBuilding></FaBuilding> My Enrolled Classes</NavLink></li>
                                    {/* <li><NavLink to="/dashboard/payment"><FaHome></FaHome> Payment</NavLink></li> */}
                                    <li><NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                                </>
                    }




                    <div className="divider"></div>
                    <li ><NavLink to="/"><FaHome></FaHome>Go To Home</NavLink> </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;