import Cover from "../../components/Cover/Cover";
import useInfoOfInstructors from "../../hooks/useInfoOfInstructors";
import OneInstructor from "./OneInstructor";


const AllInstructors = () => {
    const [instructors] = useInfoOfInstructors()
    return (
        <div className="pt-28">
            <Cover image={'https://i.postimg.cc/Qd5J7BDr/rock-music.jpg'} title="Instructors"></Cover>





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