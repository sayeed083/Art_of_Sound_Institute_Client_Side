import useClass from "../../../hooks/useClass";
import SinglePopularClass from "./SinglePopularClass";


const PopularClass = () => {
    const [classes] = useClass()
    return (
        <div >
            <h2 className="text-center text-6xl py-20">Popular Classes</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mb-5">
                {
                    classes.slice(0,6).map(oneSingleClass => <SinglePopularClass
                    key={oneSingleClass._id}
                    oneSingleClass={oneSingleClass} 
                    ></SinglePopularClass>)
                }
            </div>
        </div>
    );
};

export default PopularClass;