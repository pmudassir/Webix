import Booking from "@components/Booking"
import Footer from "@components/Footer"
import Home from "@components/Home"
import MoreInfo from "@components/MoreInfo"
import Testimonial from "@components/Testimonial"

const Page = () => {
    return (
        <>
            <Home />
            <Booking />
            <Testimonial />
            <MoreInfo />
            <Footer />
        </>
    )
}

export default Page