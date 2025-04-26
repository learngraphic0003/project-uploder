import React from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen  text-white px-4 py-16 sm:px-8 lg:px-24">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-tight">
          Let’s Get in Touch
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
          Questions, feedback, or ready to launch your next idea? We’re just a message away.
        </p>
      </motion.div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-6xl mx-auto">
        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-start gap-4">
            <EnvelopeIcon className="h-7 w-7 text-blue-500" />
            <div>
              <p className="font-medium text-lg">Email</p>
              <p className="text-gray-400">contact@yourprojecthub.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <PhoneIcon className="h-7 w-7 text-green-500" />
            <div>
              <p className="font-medium text-lg">Phone</p>
              <p className="text-gray-400">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPinIcon className="h-7 w-7 text-red-500" />
            <div>
              <p className="font-medium text-lg">Location</p>
              <p className="text-gray-400">Remote • Worldwide</p>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-2xl space-y-6"
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition text-white font-semibold py-3 px-4 rounded-lg shadow-md"
          >
            Send Message 🚀
          </button>
        </motion.form>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Contact;
