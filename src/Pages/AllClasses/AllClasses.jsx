import Cover from "../../components/Cover/Cover";
import useClass from "../../hooks/useClass";
import OneClass from "./OneClass";
import { Slide } from "react-awesome-reveal";



const AllClasses = () => {

    const [classes] = useClass()

    const filteringApprovedClasses = classes.filter((classSingle) => classSingle.status === "approve");

    return (
        <div className="pt-2">
            <Slide>
                <Cover image={'https://i.postimg.cc/25DF7zjL/acoustic.jpg'} title="All Classes"></Cover> </Slide>
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