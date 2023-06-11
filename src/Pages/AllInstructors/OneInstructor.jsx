import { Fade} from "react-awesome-reveal";

const OneInstructor = ({ inst }) => {

    const { instructorImage, instructorName, email, numberOfClassesTaken, classesTaken } = inst;



    return (
        <div>
            <Fade delay={500}>
                <div className="card w-96 glass">
                    <figure><img  src={instructorImage} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {instructorName} </h2>
                        <p>Email: {email}</p>
                        <p> Class: {classesTaken ? `${classesTaken[0]},  ${classesTaken[1]}` : "No Classes Yet"}</p>
                        <p> Classes Taken: {numberOfClassesTaken ? numberOfClassesTaken : 0}</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-cyan-300">Details</button>
                            {/* ------------- */}



                            {/* ------------- */}
                        </div>
                    </div>
                </div>
            </Fade>

        </div>
    );
};

export default OneInstructor;