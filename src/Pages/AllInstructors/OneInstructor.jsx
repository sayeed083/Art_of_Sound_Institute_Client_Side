

const OneInstructor = ({ inst }) => {

    const { instructorImage, instructorName, email, numberOfClassesTaken, classesTaken } = inst;



    return (
        <div>

            <div className="card w-96 glass">
                <figure><img src={instructorImage} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {instructorName} </h2>
                    <p>Class:{classesTaken[1]} </p>
                    <p>Email: {email}</p>
                    <p>Classes Taken:{numberOfClassesTaken}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-cyan-300">Select</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OneInstructor;