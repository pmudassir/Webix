const TestimonialCard = ({ testimonial }) => {
    const { avatarSrc, name, title, content } = testimonial;

    return (
        <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform-gpu hover:shadow-lg hover:scale-105">
            <div className="flex items-start mb-4">
                <img src={avatarSrc} alt={`${name}'s Avatar`} className="w-12 h-12 rounded-full object-cover mr-4 shadow" />
                <div>
                    <p className="text-lg font-semibold text-gray-800">{name}</p>
                    <p className="text-gray-600 font-extralight">{title}</p>
                </div>
            </div>
            <p className="text-gray-700">{content}</p>
        </div>
    );
};

export default TestimonialCard