import { Zoom, Slide } from "react-awesome-reveal";

const AboutClass = () => {
    return (
        <div className="mt-40 pb-5">
            
            <div className="flex justify-evenly items-center">
                <div>
                  <Slide delay={300}>  <img className="rounded-xl w-[630px] relative" src="https://i.postimg.cc/gk1CZStG/card-soft-template-paper-report.jpg" alt="" /></Slide>
                    <Slide delay={400}><img className="w-[620px] rounded-xl absolute transform -translate-y-[465px] -translate-x-10" src="https://i.postimg.cc/YSnRH1kP/close-up-dad-teaching-girl-play-guitar.jpg" alt="" /> </Slide>
                </div>
                <div>
                    <Slide delay={300} direction="down"> <h2 className="text-2xl">We make you want to Learn Instruments!</h2></Slide>
                    <Zoom delay={200}>    <h2 className="text-3xl font-bold">Learn From Our Skilled Instructors</h2></Zoom>
                    <Slide delay={300} direction="up"> <p className="mt-5">We Provide Great Learning experience. <br /> Our Instructors are vey Skilled,Expert and Professionals</p></Slide>
                </div>
            </div>
        </div>
    );
};

export default AboutClass;