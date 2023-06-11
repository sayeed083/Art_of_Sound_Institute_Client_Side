

const Cover = ({ image, title }) => {
    return (
        <div className="hero min-h-full mb-10 rounded-lg" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md h-60">
                    <h1 className="mb-5 text-5xl pt-20 font-bold">{title}</h1>

                </div>
            </div>
        </div>
    );
};

export default Cover;
