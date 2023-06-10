import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const GiveFeedBackPage = () => {

    const giveFeedBack = useLoaderData()

    const handleSendFeedback = event => {

        event.preventDefault();

        const form = event.target;
        
        const feedback = form.feedback.value;
        const feedbackUpdated = {
            feedback
        }
        console.log(feedbackUpdated);








        fetch(`http://localhost:5000/classes/feedback/${giveFeedBack._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedbackUpdated),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Send Feedback About ${giveFeedBack.name}.`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }


    return (
        <div>
            <h2>Give Feed back: {giveFeedBack.name}</h2>



            <div className="hero min-h-screen bg-cyan-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-16 text-violet-500">Send FeedBack!</h1>
                        <h1 className="text-2xl text-center my-5 text-violet-500">{giveFeedBack.name}</h1>
                    </div>
                    <form onSubmit={handleSendFeedback}>
                        <div className="card w-full  shadow-2xl bg-base-100">
                            <div className="grid grid-cols-2 gap-5 p-10">



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Send FeedBack</span>
                                    </label>
                                    <input type="text" name="feedback"
                                        placeholder="Write About It" className="input input-bordered" />
                                </div>


                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Send Feedback" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>












        </div>
    );
};

export default GiveFeedBackPage;