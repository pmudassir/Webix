import Form from '@components/Form';

const Booking = () => {
    return (
        <div className="flex justify-center">
            <div className="flex items-center w-full max-w-4xl">
                {/* Left Section */}
                <div className="flex flex-col w-1/2 pr-10">
                    <h2 className="text-3xl font-bold mb-6">Benefits of Booking</h2>
                    <ul className="list-disc list-inside mb-6">
                        <li>Benefit 1</li>
                        <li>Benefit 2</li>
                        <li>Benefit 3</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="w-1/2">
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default Booking
