import { useQuery } from "@tanstack/react-query";
import { FaUserShield, FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })



    // instructor
    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now an Admin.`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now an Respectable Instructor.`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch((error) => {
                console.error(error);
            });

    }



    return (
        <div>
            <h2 className="text-center text-5xl mb-5 underline">Manage Users</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SI No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role </th>
                            <th>Role (Admin)</th>
                            <th>Role (Instructor)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' : 'student' && user.role === 'instructor' ? 'instructor' : 'student'}</td>
                                <td>
                                    <button onClick={() => handleMakeAdmin(user)} disabled={user.role === "admin" || user.role === "instructor"} className="btn btn-ghost bg-sky-600  text-white"><FaUserShield></FaUserShield><span className="text-[10px]">Make Admin</span></button>
                                </td>
                                <td>
                                    <button onClick={() => handleMakeInstructor(user)} disabled={user.role === "admin" || user.role === "instructor"} className="btn btn-ghost bg-lime-600  text-white"><FaUserAlt></FaUserAlt><span className="text-[10px]">Make Instructor</span></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;