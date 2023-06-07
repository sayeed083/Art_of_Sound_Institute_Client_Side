
const OneClass = ({ cls: classSingle }) => {

    const { image, name, instructor, availableSeats, price } = classSingle;

    
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
                        <button className="btn bg-cyan-300">Select</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OneClass;