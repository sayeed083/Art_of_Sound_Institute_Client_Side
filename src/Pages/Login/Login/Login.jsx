import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../../assets/authentication.png"
import { AuthContext } from "../../../providers/AuthProvider";


const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, { replace: true });
        })

    }
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("${image}")` }}>
                <div className="hero-content flex-col lg:flex-row">

                    <div className="text-center lg:text-left">
                        <img className="w-[720px]" src="https://i.postimg.cc/KzSc7YSh/Authentication-2.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-5xl font-bold mb-5 text-center">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered absolute mt-3" />
                                <p className="relative translate-x-60 -translate-y-1" onClick={handleShowPassword}>
                                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                </p>

                            </div>




                            {/* Submit */}

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p><small>No Account? Please <Link className="text-green-400" to="/register">Register!</Link></small></p>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;