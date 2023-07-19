import TestimonialCard from "@components/TestimonialCard";
import { testimonials } from "@data";

const Testimonial = () => {
    return (
        <div className="bg-gray-100 rounded-lg shadow-md p-6 mt-20">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-3">Testimonials</h2>
            <p className="text-gray-600 mb-20 text-center font-semibold">
                We have worked with thousands of amazing people who love our services. <br /> Here's what they have to say about us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
        </div>
    );
};

export default Testimonial;