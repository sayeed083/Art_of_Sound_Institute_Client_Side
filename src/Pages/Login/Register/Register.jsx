import { Link } from "react-router-dom";
import image from "../../../assets/authentication.png"

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("${image}")` }}>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className="w-[720px]" src="https://i.postimg.cc/KzSc7YSh/Authentication-2.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h1 className="text-3xl font-bold mb-5 text-center">Register now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Confirm password" className="input input-bordered" />

                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURl</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" />
                            </div>


                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p><small>Already Have an Account? Please <Link className="text-green-400" to="/login">Login!</Link></small></p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;