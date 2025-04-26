import React, { useState } from 'react';
import Navbar from '../Navbar';
import { Footer } from "../Footer";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userData from '../../data/user.json'; // 🔥 Import user data

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔍 Check if any user matches email & password
    const user = userData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Save authentication status and user details in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', user.username);
      localStorage.setItem('profileImage', user.profileImage); // Assuming user object has profileImage

      toast.success(`Welcome, ${user.username}!`, {
        position: "top-right",
        autoClose: 3000,
        theme: "colored"
      });

      navigate('/');
    } else {
      toast.error("Invalid email or password", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored"
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-darkblue px-4 py-12 md:py-0 overflow-hidden gap-10">
        {/* Left: Login Form */}
        <div className="bg-transparent p-6 rounded-md shadow-md w-full max-w-md animate-fadeIn">
          <h2 className="text-2xl mb-6 text-center text-white font-semibold">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-white">Email</label>
              <input
                type="text"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md text-black"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-white">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-md text-black"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md mb-4 hover:bg-blue-700 transition-all duration-300"
            >
              Login
            </button>
            <Link to='/signup'>
              <p className='text-center text-white'>
                Don't have an account? <span className='text-green-400 hover:underline'>Sign up</span>
              </p>
            </Link>
          </form>
        </div>

        {/* Right: Image */}
        <div className="w-full max-w-sm md:block hidden animate-fadeInUp">
          <img
            src="robo2.png"
            alt="AI Robot"
            className="w-full rounded-lg animate-float drop-shadow-xl"
          />
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Login;
