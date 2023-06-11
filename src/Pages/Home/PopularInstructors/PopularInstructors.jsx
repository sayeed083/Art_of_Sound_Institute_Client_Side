import useInfoOfInstructors from "../../../hooks/useInfoOfInstructors";
import SinglePopularInstructors from "./SinglePopularInstructors";
import { Fade } from "react-awesome-reveal";


const PopularInstructors = () => {

    const [instructors] = useInfoOfInstructors()

    return (
        <div>
            <Fade>
            <h2 className="text-center text-6xl py-20">Popular Instructors</h2>
            </Fade>




            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mb-5">
                {
                    instructors.slice(0,6).map(singleInst => <SinglePopularInstructors
                        key={singleInst._id}
                        singleInst={singleInst}
                        ></SinglePopularInstructors>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;