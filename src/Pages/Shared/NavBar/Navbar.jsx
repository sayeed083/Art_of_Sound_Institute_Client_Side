import { useContext } from "react";
import { Link } from "react-router-dom";
import Switcher from "../../../components/Switcher";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    const navsections = <>
        <li className="text-lg"><Link to="/">Home</Link></li>
        <li className="text-lg"><Link to="/allInstructors">Instructors</Link></li>
        <li className="text-lg"><Link to="/allClasses">Classes</Link></li>
        <Switcher></Switcher>
        {user && 
        
        <li className="text-lg"><Link to="/dashboard/mySelectedClass"> Dashboard</Link></li>}
    </>

// {user && isAdmin ?
//     <li className="text-lg"><Link to="/dashboard/manageClasses">Dashboard</Link></li>
//     :
//   user &&  isInstructor ?
//         <li className="text-lg"><Link to="/dashboard/addClass">Dashboard</Link></li>
//         :
//         user &&
//         <li className="text-lg"><Link to="/dashboard/mySelectedClass"> Dashboard</Link></li>

// }





    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 dark:bg-opacity-30 max-w-screen-xl text-black dark:text-white bg-teal-700 dark:bg-cyan-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:text-cyan-400">
                            {navsections}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost uppercase text-xl">Art of Sound Institute</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navsections}
                    </ul>
                </div>
                <div className="navbar-end">

                    {/* For User Photo And on Hover The Name */}
                    {user &&
                        <div className="tooltip " data-tip={user.displayName}>
                            <img className="w-20 rounded-full mr-6" src={user.photoURL} alt="" />
                        </div>

                    }

                    {/* Toggle Login LogOut */}
                    {
                        user ? <>
                            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                        </> : <>
                            <Link to="/login">
                                <button className="btn glass">Log In</button>
                            </Link>
                        </>
                    }
                    



                </div>
            </div>
        </div>
    );
};

export default Navbar;