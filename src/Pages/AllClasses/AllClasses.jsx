import useClass from "../../hooks/useClass";



const AllClasses = () => {

    const [classes] = useClass()



    return (
        <div>
            <h2 className="text-center text-6xl">There Are All Classes: {classes.length}</h2>
        </div>
    );
};

export default AllClasses;