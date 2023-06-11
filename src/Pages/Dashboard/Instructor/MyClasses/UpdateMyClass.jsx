import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

import img1 from "../../../../assets/background (2).jpg"


const UpdateMyClass = () => {

    const updateClasses = useLoaderData()
    const {_id, name, price, availableSeats} = updateClasses;


    const handleUpdateInsClass = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const availableSeats = form.availableSeats.value;
        const updatedClass = {
            price: parseInt(price),
            availableSeats: parseInt(availableSeats)
        }
        fetch(`https://a-12-summer-camp-school-server.vercel.app/classes/updateMyClass/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedClass),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `The ${name} is Updated.`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }


    return (
        <div>
            <div className="hero min-h-screen bg-cyan-200" style={{ backgroundImage: `url("${img1}")` }}>
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-16 text-green-500">Update Your Class!</h1>
                        <h1 className="text-2xl text-center my-5 text-blue-500">{name}</h1>
                    </div>
                    <form onSubmit={handleUpdateInsClass}>
                        <div className="card w-full  shadow-2xl bg-base-100">
                            <div className="grid grid-cols-2 gap-5 p-10">



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Update Price</span>
                                    </label>
                                    <input defaultValue={price} type="number" name="price"
                                        placeholder="Increase or Decrese" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Seat Update</span>
                                    </label>
                                    <input defaultValue={availableSeats} type="number" name="availableSeats"
                                        placeholder="Write About It" className="input input-bordered" />
                                </div>


                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-info" type="submit" value="Up--Date" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default UpdateMyClass;