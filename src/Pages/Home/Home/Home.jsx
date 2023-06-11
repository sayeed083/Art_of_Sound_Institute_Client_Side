
import HomeSlider from "../HomeSlider/HomeSlider";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div className=" dark:bg-gray-800 dark:text-white">
            <HomeSlider></HomeSlider>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>

        </div>
    );
};

export default Home;