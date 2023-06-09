import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import img1 from "../../../../assets/background (1).jpg"
import img2 from "../../../../assets/background (2).jpg"
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../providers/AuthProvider";


const imgToken = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {

    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_URl = `https://api.imgbb.com/1/upload?key=${imgToken}`

    const onSubmit = data => {


        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_URl, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imageURL = imageResponse.data.display_url;
                    const { name, instructor, email, availableSeats, price } = data;
                    const newCls = { name, instructor, email, availableSeats: parseInt(availableSeats), price: parseFloat(price), image: imageURL }
                    console.log(newCls);
                    axiosSecure.post('/classes', newCls)
                        .then(data => {
                            console.log('after posting new Class', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Added Class successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

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
                            {/* <input type="text" {...register("name", { required: true })} name="name" placeholder="Class Name" className="input input-bordered bg-sky-200" /> */}
                            <select defaultValue="Pick One" {...register("name", { required: true })} name="name" className="select select-bordered bg-sky-200">
                                <option disabled>Pick One</option>
                                <option>Guitar</option>
                                <option>Piano</option>
                                <option>Violin</option>
                                <option>Drums</option>
                                <option>Flute</option>
                                <option>Trumpet</option>
                                <option>Saxophone</option>
                                <option>Viola</option>
                            </select>
                        </div>
                        <div className="flex gap-20">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Instructor Name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} {...register("instructor", { required: true })} name="instructor" placeholder="Instructor Name" className="input input-bordered bg-sky-200" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Instructor Email</span>
                                </label>
                                <input type="email" defaultValue={user?.email} {...register("email", { required: true })} name="email" placeholder="Instructor Email" className="input input-bordered bg-sky-200" readOnly />
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
                            <input type="file" {...register("image", { required: true })} name="image" className="file-input w-full bg-sky-200" />
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