

const SinglePopularClass = ({ oneSingleClass }) => {
    const { image, name, instructor, availableSeats, price } = oneSingleClass;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name: {name} </h2>
                    <p>Instructor Name: {instructor}</p>
                    <p>Available seats: {availableSeats}</p>
                    <p>Price: $ {price}</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePopularClass;