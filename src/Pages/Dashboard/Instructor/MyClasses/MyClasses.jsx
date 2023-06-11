
import { Link } from "react-router-dom";
import useMyClasses from "../../../../hooks/useMyClasses";


const MyClasses = () => {
    // const [classes] = useClass()
    // const pendingClasses = classes.filter(pendSingleCls => pendSingleCls.status === 'pending')
    const [myInstructorClass] = useMyClasses()



    return (
        <div >
            <h2 className="text-center text-5xl mb-10">My Classes</h2>


            {/* ========TABLE======== */}


            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SI No</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Enrolled Students</th>
                            <th className="text-warning">Feedback</th>
                            <th className="text-success">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myInstructorClass.map((sClass, index) => <tr key={sClass._id}>
                                <th>{index + 1}</th>
                                <td>{sClass.name}</td>
                                <td>{sClass.instructor}</td>
                                <td>{sClass.email}</td>
                                <td>{sClass.availableSeats}</td>
                                <td>{sClass.price}</td>
                                <td>{sClass.status}</td>
                                <td>{sClass.students}</td>
                                <td>
                                    {sClass.status === "denied" ? (
                                        sClass.feedback
                                    ) : (
                                        <span>{''}</span>
                                    )}
                                </td>
                                <td></td>
                                <Link to={`/dashboard/updateMyClass/${sClass._id}`}>
                                    <button className="btn btn-outline btn-success btn-sm">Update</button>
                                </Link>



                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

            {/* ========TABLE======== */}


        </div>
    );
};

export default MyClasses;