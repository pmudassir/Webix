const Form = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6">Booking Form</h2>
            <p className="text-lg mb-4">Please fill in the details below:</p>

            <form>
                <div className="mb-4">
                    <label className="block mb-1 text-gray-600">First Name</label>
                    <input type="text" className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-gray-600">Last Name</label>
                    <input type="text" className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-gray-600">Email</label>
                    <input type="email" className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-gray-600">Phone Number</label>
                    <input type="tel" className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
                </div>

                <button type="submit" className="bg-blue-500 text-white rounded px-6 py-3 hover:bg-blue-600">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form
