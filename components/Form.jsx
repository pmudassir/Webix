const Form = () => {
  return (
    <div className="bg-green-950 py-8 px-4 md:px-10 rounded-lg -mt-20 md:ml-20 w-full md:w-auto">
      <h2 className="text-3xl font-bold mb-6 text-white font-work text-center">Schedule an Appointment</h2>
      <p className="text-lg mb-4 text-white text-center md:text-left">Skyrocket your Business Growth!</p>

      <form>
        <div className="mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="First Name"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Last Name"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="E-mail"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="tel"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Phone Number"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white rounded px-10 py-3 w-full md:w-auto hover:bg-blue-600">
          Schedule Now
        </button>
      </form>
    </div>
  );
};

export default Form;