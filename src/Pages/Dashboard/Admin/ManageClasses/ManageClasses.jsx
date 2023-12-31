
import { FaCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useClass from "../../../../hooks/useClass";


const ManageClasses = () => {

    const [classes] = useClass();
    // const pendingClasses = classes.filter(pendSingleCls => pendSingleCls.status === 'pending')



    const handleApprove = approveOrDeleteClass => {
        console.log("Approved");
        fetch(`https://a-12-summer-camp-school-server.vercel.app/classes/status/${approveOrDeleteClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    // refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${approveOrDeleteClass.name} is Approved.`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };


    const handleDeny = approveOrDeleteClass => {
        console.log("deny tomare nimu na");
        fetch(`https://a-12-summer-camp-school-server.vercel.app/classes/statusDeny/${approveOrDeleteClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: `Sorry We Can't Allow this ${approveOrDeleteClass.name}.`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })



    }





    return (
        <div>
            <h2 className="text-center text-5xl mb-5 underline">Manage Classes</h2>





            <div className="overflow-x-auto px-10">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action approve</th>
                            <th>Action denied</th>
                            <th>Action Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.slice(8).map((approveOrDeleteClass) => <tr key={approveOrDeleteClass._id}>

                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={approveOrDeleteClass.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>{approveOrDeleteClass.name}</td>
                                <td>{approveOrDeleteClass.instructor}</td>
                                <td>{approveOrDeleteClass.email}</td>
                                <td>{approveOrDeleteClass.availableSeats}</td>
                                <td>{approveOrDeleteClass.price} </td>
                                {/* <td>{approveOrDeleteClass.status === 'approve' ? 'approve' : approveOrDeleteClass.status}</td> */}
                                <td>{approveOrDeleteClass.status === 'approve' ? 'approve' : (approveOrDeleteClass.status === 'denied' ? 'denied' : approveOrDeleteClass.status)}</td>

                                {/* Action Part */}
                                <td><button onClick={() => handleApprove(approveOrDeleteClass)} disabled={approveOrDeleteClass.status === "approve"} className="btn btn-ghost  text-white"><FaCheckCircle className="text-green-600 text-2xl"></FaCheckCircle></button></td>

                                <td><button onClick={() => handleDeny(approveOrDeleteClass)} className="btn btn-ghost   text-white"><RxCrossCircled className="text-red-600 text-2xl"></RxCrossCircled></button>
                                </td>
                                <td>
                                    <Link to={`/dashboard/feedBack/${approveOrDeleteClass._id}`}>
                                        <button className="btn  bg-rose-400">Send FeedBack</button>
                                    </Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default ManageClasses;