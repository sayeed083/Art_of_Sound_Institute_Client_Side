import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const OneClass = ({ classSingle }) => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin();

    const [isInstructor] = useInstructor();
    const { image, name, instructor, availableSeats, price, _id } = classSingle;


    const navigate = useNavigate();
    const location = useLocation();


    // const handleSelect = classSingle => {
    //     console.log(classSingle);
    //     if (user && user.email) {
    //         const addedClasses = { classId: _id, name, image, price, instructor, email: user.email }
    //         fetch('http://localhost:5000/selectedClass', {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(addedClasses)
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.insertedId) {
    //                     Swal.fire({
    //                         position: 'top',
    //                         icon: 'success',
    //                         title: 'You Selected The Class',
    //                         showConfirmButton: false,
    //                         timer: 1500
    //                     })
    //                 }
    //             })
    //     }
    //     else {
    //         Swal.fire({
    //             title: 'Please Login',
    //             icon: 'warning',
    //             showCancelButton: true,
    //             confirmButtonColor: '#3085d6',
    //             cancelButtonColor: '#d33',
    //             confirmButtonText: 'Log In'
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 navigate("/login", { state: { from: location } })
    //             }
    //         })
    //     }

    // }


    const handleSelect = () => {
        if (!user || !user.email) {
            Swal.fire({
                title: 'Please Log In',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log In'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        } else if (availableSeats === 0) {
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'No Available Seats',
                showConfirmButton: false,
                timer: 1500
            });
        } else if (isAdmin || isInstructor) {
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'Cannot Select as Admin/Instructor',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            const addedClasses = { classId: _id, name, image, price, instructor, email: user.email };
            fetch('http://localhost:5000/selectedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addedClasses)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'You Selected The Class',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
        }
    };


    //Turning the Card of Single Class Turning Red If Seat Count is 0
    const redCard = `card w-96 glass ${availableSeats === 0 ? 'bg-red-500' : ''}`;

    return (
        <div>

            <div className={redCard}>
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name: {name} </h2>
                    <p>Instructor Name: {instructor}</p>
                    <p>Available seats: {availableSeats}</p>
                    <p>Price: $ {price}</p>
                    <div className="card-actions justify-end">
                        {/* <button onClick={() => handleSelect(classSingle)} className="btn bg-cyan-300">Select</button> */}
                        <button
                            onClick={handleSelect}
                            className="btn bg-cyan-300"
                            disabled={availableSeats === 0 || isAdmin || isInstructor}
                        >
                            Select
                        </button>





                    </div>
                </div>
            </div>

        </div>
    );
};

export default OneClass;