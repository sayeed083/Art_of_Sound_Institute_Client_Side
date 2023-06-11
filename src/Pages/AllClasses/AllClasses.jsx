import Cover from "../../components/Cover/Cover";
import useClass from "../../hooks/useClass";
import OneClass from "./OneClass";



const AllClasses = () => {

    const [classes] = useClass()

    const filteringApprovedClasses = classes.filter((classSingle) => classSingle.status === "approve");

    return (
        <div className="pt-28">
            <Cover image={'https://i.postimg.cc/25DF7zjL/acoustic.jpg'} title="All Classes"></Cover>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mb-5">
                {
                    filteringApprovedClasses.map(classSingle => <OneClass
                    key={classSingle._id}
                    classSingle={classSingle}
                    ></OneClass>)
                }
            </div>
        </div>
    );
};

export default AllClasses;