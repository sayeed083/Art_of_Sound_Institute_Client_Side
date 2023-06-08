import useInfoOfInstructors from "../../hooks/useInfoOfInstructors";
import OneInstructor from "./OneInstructor";


const AllInstructors = () => {
    const [instructors] = useInfoOfInstructors()
    return (
        <div>
            <h2 className="text-center text-6xl py-20">There Are All Instructors: {instructors.length}</h2>



            

            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mb-5">
            {
                            instructors.map(inst => <OneInstructor
                                key={inst._id}
                                inst={inst}
                            ></OneInstructor>)
                        }
            </div>




        </div>
    );
};

export default AllInstructors;