import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const OneClass = ({ classSingle }) => {

    const { user } = useContext(AuthContext)
    const { image, name, instructor, availableSeats, price, _id } = classSingle;


    const navigate = useNavigate();
    const location = useLocation();


    const handleSelect = classSingle => {
        console.log(classSingle);
        if (user && user.email) {
            const addedClasses = { classId: _id, name, image, price, instructor, email: user.email }
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
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log In'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }

    }

    return (
        <div>

            <div className="card w-96 glass">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name: {name} </h2>
                    <p>Instructor Name: {instructor}</p>
                    <p>Available seats: {availableSeats}</p>
                    <p>Price: $ {price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleSelect(classSingle)} className="btn bg-cyan-300">Select</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OneClass;