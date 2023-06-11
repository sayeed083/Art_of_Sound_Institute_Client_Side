import useSelectClass from "../../../../hooks/useSelectClass";
import { FaTrashAlt, FaWallet } from "react-icons/fa"
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MySelectedClass = () => {
    const [selectedClass, refetch] = useSelectClass()
    const filteredSelectedClass = selectedClass.filter(sClass => !sClass.payment);

    const handleDelete = sClass => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://a-12-summer-camp-school-server.vercel.app/selectedClass/${sClass._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <h2 className="text-center text-5xl mb-5 underline">My Selected Class</h2>


            <div className="overflow-x-auto w-[720px]">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                SI No
                            </th>
                            <th>Class</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSelectedClass.map((sClass, index) =>
                            <tr
                                key={sClass._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={sClass.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {sClass.name}

                                </td>
                                <td>
                                    {sClass.instructor}

                                </td>
                                <td className="text-end">${sClass.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(sClass)} className="btn btn-ghost text-xl bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>

                                <td>
                                    <Link state={{price:sClass.price,id:sClass._id}} to={`/dashboard/payment/${sClass._id}`}>
                                        <button className="btn btn-outline">Pay<FaWallet className="text-xl text-blue-500"></FaWallet></button>
                                    </Link>
                                </td>



                            </tr>)}


                    </tbody>

                </table>
            </div>



        </div>
    );
};

export default MySelectedClass;