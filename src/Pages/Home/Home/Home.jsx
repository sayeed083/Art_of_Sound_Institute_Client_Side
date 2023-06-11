
import AboutClass from "../AboutClass/AboutClass";
import HomeSlider from "../HomeSlider/HomeSlider";
import InstrumentIntro from "../InstrumentIntro/InstrumentIntro";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div className=" dark:bg-gray-800 dark:text-white">
            <HomeSlider></HomeSlider>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
            <InstrumentIntro></InstrumentIntro>
            <AboutClass></AboutClass>

        </div>
    );
};

export default Home;