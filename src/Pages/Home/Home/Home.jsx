
import useInstructor from "../../../hooks/useInstructor";
import HomeSlider from "../HomeSlider/HomeSlider";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
    const [isInstructor] = useInstructor()
    console.log("is instructorrrrrrrrrrrrrrrrrrr", isInstructor);
    return (
        <div className=" dark:bg-gray-800 dark:text-white">

            <HomeSlider></HomeSlider>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
            
        </div>
    );
};

export default Home;