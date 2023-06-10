import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="relative">

            <img className=" mx-auto w-[5080px] " src="https://i.postimg.cc/yNXqW2k5/6325254.jpg" alt="" />

            <div className=" absolute transform -translate-y-20 left-0 right-0 flex flex-col items-center  ">
                <Link to="/">
                    <button className="btn btn-success">Back To Home</button>
                </Link>
            </div>




        </div>
    );
};

export default ErrorPage;