import useInfoOfInstructors from "../../../hooks/useInfoOfInstructors";
import SinglePopularInstructors from "./SinglePopularInstructors";


const PopularInstructors = () => {

    const [instructors] = useInfoOfInstructors()

    return (
        <div>
            <h2 className="text-center text-6xl py-20">Popular Instructors: {instructors.length}</h2>





            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mb-5">
                {
                    instructors.map(singleInst => <SinglePopularInstructors
                        key={singleInst._id}
                        singleInst={singleInst}
                        ></SinglePopularInstructors>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;