export default function Hero() {
    return (
        <div className="bg-hero h-full min-h-[70vh] w-full bg-no-repeat bg-cover bg-center px-5 md:px-10 py-5 flex flex-col items-start justify-between">
            <h1 className="text-3xl md:text-7xl text-white font-bold">
                Digital Experiences <br /> That Drive <br /> Results
            </h1>
            <div>
                <p className="font-semibold text-white text-xl">
                    In a world where every click matters,
                </p>
                <p className="font-semibold text-white text-xl">
                    we craft solutions that connect, convert, and create lasting
                    impact.
                </p>
            </div>
        </div>
    );
}
