import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                const saveTheUser = { name: loggedInUser.displayName, email: loggedInUser.email, instructorImage:loggedInUser.photoURL, yearsOfExperience: 10 }
                fetch('https://a-12-summer-camp-school-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveTheUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-start",
                                icon: "success",
                                title: "Created & Updated The User",
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate(from, { replace: true });
                        }
                    })
                })
            }
            

    return (
        <div>
            <div className="divider">OR</div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary">
                    <FaGoogle></FaGoogle>Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;