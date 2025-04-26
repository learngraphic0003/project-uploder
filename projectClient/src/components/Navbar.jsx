import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const navigate = useNavigate();

  // Check authentication status and user info from localStorage
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
    if (authStatus === 'true') {
      setUsername(localStorage.getItem('username'));
      setProfileImage(localStorage.getItem('profileImage'));
    }
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Explore', path: '/explore' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = () => {
    // Clear authentication status and user info from localStorage
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    localStorage.removeItem('profileImage');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="bg-darkblue text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-auto rounded-md" />
          <span className="text-xl font-semibold">FileFolio</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          <ul className="flex space-x-8 text-base font-medium">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link to={path} className="hover:text-blue-400 transition">
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {/* User Info */}
                <div className="flex items-center gap-2">
                  <img
                    src={profileImage || 'defaultProfileImage.jpg'}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-white">{username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md text-sm font-medium">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-md text-sm font-medium">
                    Signup
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-darkblue mt-4 rounded-md px-6 py-4 space-y-4 shadow-lg">
          <ul className="space-y-3 text-center text-lg">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-blue-400 transition"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2">
                  <img
                    src={profileImage || 'defaultProfileImage.jpg'}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-white">{username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium">
                    Signup
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
