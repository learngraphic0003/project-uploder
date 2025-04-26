import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Login from './components/MainComponents/Login';
import Signup from './components/MainComponents/SignUp';
import Explore from './pages/Explore';
import Upload from './pages/UploadPage';
import ProfilePage from './pages/ProfilePage';
import ViewProject from './pages/ViewProject';
import AboutPage from './pages/About';
import Contact from './pages/Contact';
import AdminPage from './pages/Admin';
import AllPage from './pages/AllPage';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />         {/* Landing Page */}
        <Route path="/login" element={<Login />} />   {/* Login Page */}
        <Route path="/signup" element={<Signup />} /> {/* Signup Page */}
        <Route path="/explore" element={<Explore/>} /> {/* Signup Page */}
        <Route path="/upload" element={<Upload/>} /> {/* Signup Page */}
        <Route path="/profile" element={<ProfilePage/>} /> {/* Signup Page */}
        <Route path="/about" element={<AboutPage/>} /> {/* Signup Page */}

        <Route path="/viewproject/:projectname" element={<ViewProject />} />

        <Route path="/contact" element={<Contact/>} /> {/* Signup Page */}
        <Route path="/admin" element={<AdminPage/>} /> {/* Signup Page */}
        <Route path="/allPage" element={<AllPage/>} /> {/* Signup Page */}


      </Routes>

  );
};

export default App;
