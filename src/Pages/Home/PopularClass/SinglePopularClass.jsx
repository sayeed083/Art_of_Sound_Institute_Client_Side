import {   Slide } from "react-awesome-reveal";

const SinglePopularClass = ({ oneSingleClass }) => {
    const { image, name, instructor, availableSeats, price } = oneSingleClass;
    return (
        <div>
            <Slide delay={500}>
            <div className="card w-96 glass">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name: {name} </h2>
                    <p>Instructor Name: {instructor}</p>
                    <p>Available seats: {availableSeats}</p>
                    <p>Price: $ {price}</p>
                </div>
            </div>
            </Slide>
        </div>
    );
};

export default SinglePopularClass;