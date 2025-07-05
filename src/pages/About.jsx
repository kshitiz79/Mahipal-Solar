import React from 'react';

const About = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">About Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Contact Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Contact Us</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <span className="font-bold text-gray-700 mr-2">Call:</span>
              <span className="text-gray-600">+918042782156</span>
            </p>
            <p className="flex items-center">
              <span className="font-bold text-gray-700 mr-2">Email:</span>
              <span className="text-gray-600">fgps.solar@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Our Location</h2>
          <p className="text-gray-600 mb-4">
            Future Green Power Solutions Pvt. Ltd.<br />
            92, Karni Nagar E, Gandhi Path West,<br />
            Near Sanaya Restaurant, Vaishali Nagar,<br />
            302021, Jaipur
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=92,+Karni+Nagar+E,+Gandhi+Path+West,+Vaishali+Nagar,+Jaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition duration-300"
          >
            View on Map
          </a>
        </div>

        {/* Mission Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Our Mission</h2>
          <p className="text-gray-600">
            Empowering a sustainable future through innovative solar solutions and green energy initiatives.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:col-span-2 lg:col-span-3">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-600">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;