import Nav from "@components/Nav"

const Home = () => {
    return (
        <div>
            <div className="flex h-screen"
                style={{
                    backgroundImage: "url('/assets/images/main.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <Nav />
                <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 ml-20">
                    <div className="flex flex-col gap-5 lg:gap-10">
                        <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl ml-5 font-work font-black">
                            Your Success Begins: <br className="lg:flex hidden" />Reserve Your Website <br className="lg:flex hidden" />Creation Appointment.
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-700 ml-5 font-work font-normal">
                            Take Your Business to New Heights:  <br className="lg:flex hidden" /> Schedule Appointment for Unparalleled Online Success
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

