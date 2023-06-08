import useClass from "../../hooks/useClass";
import OneClass from "./OneClass";



const AllClasses = () => {

    const [classes] = useClass()



    return (
        <div>
            <h2 className="text-center text-6xl py-20">There Are All Classes</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mb-5">
                {
                    classes.map(classSingle => <OneClass
                    key={classSingle._id}
                    classSingle={classSingle}
                    ></OneClass>)
                }
            </div>
        </div>
    );
};

export default AllClasses;