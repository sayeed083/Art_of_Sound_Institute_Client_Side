

const InstrumentIntro = () => {
    return (
        <div className="mb-10">
            <h2 className="text-center text-5xl mt-20"> Learn About Instruments</h2>
            <div className="grid grid-cols-4 gap-20 px-10 mt-20">
                <div>
                    <img className="w-[200px] mx-auto " src="https://i.postimg.cc/5tdBxJ0d/drums.png" alt="" />
                    <p className="text-center text-3xl my-8 underline font-semibold text-red-200">Drum</p>
                    <p className="text-center ">The drum is a percussion instrument that consists of a hollow cylindrical body, known as a drum shell, and a drumhead stretched across one or both ends.</p>
                </div>
                <div>
                    <img className="w-[200px] mx-auto" src="https://i.postimg.cc/mg3F8cYc/electric-guitar.png" alt="" />
                    <p className="text-center text-3xl my-8 underline font-semibold text-amber-300">Guitar</p>
                    <p className="text-center ">A guitar is a musical instrument with strings that you play by plucking or strumming. It is popular for both solo performances and accompaniment.</p>
                </div>
                <div>
                    <img className="w-[200px] mx-auto" src="https://i.postimg.cc/zD0FT4dK/piano.png" alt="" />
                    <p className="text-center text-3xl my-8 underline font-semibold text-zinc-500">Piano</p>
                    <p className="text-center ">
                        The piano is a musical instrument with a keyboard. It consists of a series of keys, usually 88 in number, which are connected to strings inside a large wooden case.</p>
                </div>
                <div>
                    <img className="w-[200px] mx-auto" src="https://i.postimg.cc/QMQpCz9B/violin.png" alt="" />
                    <p className="text-center text-3xl my-8 underline font-semibold text-orange-400">Violin</p>
                    <p className="text-center ">The violin is a string instrument that is played with a bow. It has a hollow wooden body, a long neck, and four strings stretched across it.</p>
                </div>

            </div>
        </div>
    );
};

export default InstrumentIntro;