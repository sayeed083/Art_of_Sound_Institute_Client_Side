import { FaTrashAlt, FaUserAlt, FaUserShield } from "react-icons/fa";
import useClass from "../../../../hooks/useClass";


const ManageClasses = () => {

    const [classes] = useClass();
    const pendingClasses = classes.filter(pendSingleCls => pendSingleCls.status === 'pending')


    return (
        <div>
            <h2 className="text-center text-5xl mb-5">Manage Classes</h2>





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
                            pendingClasses.map((approveOrDeleteClass) => <tr key={approveOrDeleteClass._id}>
 
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
                                <td>{approveOrDeleteClass.price}</td>
                                {/* <td>{approveOrDeleteClass.status === 'approve' ? 'approve' : approveOrDeleteClass.status}</td> */}
                                <td>{approveOrDeleteClass.status === 'approve' ? 'approve' : (approveOrDeleteClass.status === 'denied' ? 'denied' : approveOrDeleteClass.status)}</td>

                                {/* Action Part */}
                                <td><button className="btn btn-ghost bg-sky-600  text-white"><FaUserShield></FaUserShield></button></td>

                                <td><button className="btn btn-ghost bg-lime-600  text-white"><FaUserAlt></FaUserAlt></button>
                                </td>

                                <td><button className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default ManageClasses;