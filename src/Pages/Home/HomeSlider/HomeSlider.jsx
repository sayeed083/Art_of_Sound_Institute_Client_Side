import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fade } from "react-awesome-reveal";

const HomeSlider = () => {


    return (
        <div> < Fade delay={500}>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/zfdpk3dP/music-2.jpg" />
                    <div className="absolute  transform -translate-y-1/6  left-[10%] right-[10%] top-1/2">
                        <div className="space-y-7">
                            <p className="font-bold text-2xl text-emerald-300 ml-3">Chord Conjurers</p>
                            <h2 className="text-4xl font-bold  uppercase">Magical Cords </h2>
                            <p className="text-lg "> Chords are combinations of three or more notes played <br /> simultaneously or in a specific sequence.</p>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/8P8442HD/piano2.jpg" />
                    <div className="absolute  transform -translate-y-1/6  left-[10%] right-[10%] top-1/2">
                        <div className="space-y-7">
                            <p className="font-bold text-2xl text-emerald-300 ml-3">Melodic Melange</p>
                            <h2 className="text-4xl font-bold text-white uppercase">Combinations</h2>
                            <p className="text-lg text-white">Combine the instruments is a fulfilling and enriching journey that opens up a world of creativity and self-expression. </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/Jz5pGpj8/part-2.jpg" />
                    <div className="absolute  transform -translate-y-1/6 bg-slate-600 bg-opacity-10 left-[10%] right-[10%] top-1/2">
                        <div className="space-y-7">
                            <p className="font-bold text-2xl text-emerald-300 ml-3">Acoustic Aviator</p>
                            <h2 className="text-4xl font-bold text-white uppercase">Guitar</h2>
                            <p className="text-lg text-white">Mastering chords and strumming patterns is a fundamental aspect of playing the guitar.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/SxhZSB2V/realistic-2.jpg" />
                    <div className="absolute  transform -translate-y-1/6 bg-slate-600 bg-opacity-10 left-[10%] right-[10%] top-1/2">
                        <div className="space-y-7">
                            <p className="font-bold text-2xl text-emerald-300 ml-3">Bowmanship Maven</p>
                            <h2 className="text-4xl font-bold text-white uppercase">Violin</h2>
                            <p className="text-lg text-white">Learning the violin is a transformative experience that combines artistry, discipline, and dedication.</p>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/R0CXfwTH/grunge-2.jpg" />
                    <div className="absolute  transform -translate-y-1/6 bg-slate-600 bg-opacity-10 left-[10%] right-[10%] top-1/2">
                        <div className="space-y-7">
                            <p className="font-bold text-2xl text-emerald-300 ml-3">Acoustic Ace</p>
                            <h2 className="text-4xl font-bold text-white uppercase">Classical Guitar</h2>
                            <p className="text-lg text-white">Classical guitar is a fascinating and intricate journey that allows <br /> you to explore the rich tradition of classical music. .</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/ZqPVvV3Z/close-up-2.jpg" />
                    <div className="absolute  transform -translate-y-1/6  left-[10%] right-[10%] top-1/2">
                        <div className="space-y-7">
                            <p className="font-bold text-2xl text-emerald-300 ml-3">Musical Maestro</p>
                            <h2 className="text-4xl font-bold text-white uppercase">Piano</h2>
                            <p className="text-lg text-white">The Piano requires patience, discipline, and a love for music.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </Fade>
        </div>
    );
};

export default HomeSlider;