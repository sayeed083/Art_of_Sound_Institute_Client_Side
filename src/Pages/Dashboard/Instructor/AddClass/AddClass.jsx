import { useForm } from "react-hook-form";
import img1 from "../../../../assets/background (1).jpg"
import img2 from "../../../../assets/background (2).jpg"


const AddClass = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        console.log("Add Class ",data);

    }



    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${img1}")` }}>
                
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-red-700 bg-opacity-25 ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[950px] bg-transparent ">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-white">Class Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Class Name" className="input input-bordered bg-sky-200" />
                            </div>
                            <div className="flex gap-20">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Instructor Name</span>
                                </label>
                                <input type="email" {...register("instructor", { required: true })} name="instructor" placeholder="Instructor Name" className="input input-bordered bg-sky-200" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Instructor Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Instructor Email" className="input input-bordered bg-sky-200" />
                            </div>
                            </div>
                            <div className="flex gap-20">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Available Seat</span>
                                </label>
                                <input type="number" {...register("availableSeats", { required: true })} name="availableSeats" placeholder="Available Seat" className="input input-bordered bg-sky-200" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Price</span>
                                </label>
                                <input type="number" {...register("price", { required: true })} name="price" placeholder="Price" className="input input-bordered bg-sky-200" />
                            </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Image</span>
                                </label>
                                <input type="file" className="file-input w-full bg-sky-200" />
                            </div>
                            




                            {/* Submit */}

                            <div className="form-control mt-6">
                                <input className="btn bg-emerald-400" type="submit" value="Add Class" />
                            </div>
                            


                        </form>
                    </div>
                
            </div>
        </div>
    );
};

export default AddClass;