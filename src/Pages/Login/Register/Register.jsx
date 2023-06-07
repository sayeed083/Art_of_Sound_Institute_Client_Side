import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import image from "../../../assets/authentication.png"

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors }, watch, getValues } = useForm();

    const onSubmit = data => {
        console.log(data);
        console.log("sas");
    }
    const password = watch('password');

    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("${image}")` }}>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className="w-[720px]" src="https://i.postimg.cc/KzSc7YSh/Authentication-2.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-3xl font-bold mb-5 text-center">Register now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                            </div>
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
                                <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirmPassword", { required: true }, { validate: (value) => value === getValues(password) || 'Passwords do not match' })} name="confirmPassword" placeholder="Confirm password" className="input input-bordered" />
                                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURl</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="photoURL" className="input input-bordered" />
                            </div>


                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
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