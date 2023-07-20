"use client";

import React, { useState } from "react";
import classnames from "classnames";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");

    // Show success message and update the button text
    setIsSubmitted(true);

    // Revert the button text after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-green-950 py-8 px-4 md:px-10 rounded-lg -mt-20 md:ml-20 w-full md:w-auto">
      <h2 className="text-3xl font-bold mb-6 text-white font-work text-center">
        Schedule an Appointment
      </h2>
      <p className="text-lg mb-4 text-white text-center md:text-left">
        Skyrocket your Business Growth!
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="tel"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Phone Number"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={classnames(
            "bg-blue-500",
            {
              "bg-lime-500": isSubmitted,
              "text-white": !isSubmitted,
              "text-white": isSubmitted,
              "cursor-not-allowed": isSubmitted,
              "hover:bg-blue-600": !isSubmitted,
              "hover:bg-lime-600": isSubmitted,
            },
            "text-white",
            "rounded",
            "px-10",
            "py-3"
          )}
          disabled={isSubmitted} // Disable the button when submitted
        >
          {isSubmitted ? "Scheduled!" : "Schedule Now"}
        </button>
      </form>
    </div>
  );
};

export default Form;
