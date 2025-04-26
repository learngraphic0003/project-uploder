import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../data/project.json'; // Import the project data
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';

// Fallback avatar images in the public/avatar folder
const avatarImages = [
  '/avatar/avatar1.jpg',
  '/avatar/avatar2.jpg',
  '/avatar/avatar3.jpg',
  '/avatar/avatar4.jpg',
  '/avatar/avatar5.jpg',
];

const ViewProject = () => {
  const { projectname } = useParams(); // Get the project name from the URL parameter
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Find the project with the matching name from the project data
    const selectedProject = projectData.find(
      (project) => project.projectname === projectname
    );
    setProject(selectedProject);
  }, [projectname]);

  if (!project) return <div className="text-center mt-10 text-xl">Loading...</div>; // Show loading state while fetching project

  const {
    projectimage,
    projectname: name,
    username,
    status,
    description,
    tags = [],
    userimage,
    file,
    video,
  } = project;

  // Determine if userimage is available, otherwise select a random fallback
  const avatarImage = userimage ? userimage : avatarImages[Math.floor(Math.random() * avatarImages.length)];

  return (
    <>
      <Navbar />
      <div className="p-6 md:p-12 space-y-10 max-w-screen-xl mx-auto">
        {/* Project Header + Image & Video Section */}
        <div className="flex flex-col lg:flex-row gap-6 border p-8 rounded-xl shadow-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800">
          {/* Left: Profile Image */}
          <div className="flex-shrink-0 mb-6 lg:mb-0">
            <img
              src={avatarImage}
              alt={username}
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Right: Details */}
          <div className="flex-1 space-y-6 text-white">
            <h2 className="text-4xl font-extrabold">{username}</h2>
            <p className="text-xl">
              <span className="font-semibold">Project:</span> {name}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Status:</span>{' '}
              <span
                className={`${
                  status === 'complete' ? 'text-green-400' : 'text-yellow-400'
                }`}
              >
                {status}
              </span>
            </p>
            <p className="text-lg leading-relaxed">
              <span className="font-semibold">Description:</span> {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm bg-green-600 rounded-full text-white font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Download Button */}
            <a
              href={file.url}
              download
              className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Download Now
            </a>
          </div>
        </div>

        {/* Image and Video Section with same background */}
        <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 rounded-xl shadow-xl p-8 mt-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Screenshot */}
            <div className="flex-1">
              <img
                src={projectimage}
                alt="Screenshot"
                className="w-full h-[350px] object-cover rounded-xl shadow-2xl hover:opacity-90 transition-opacity duration-300"
              />
            </div>

            {/* Video */}
            <div className="flex-1">
              <video
                controls
                className="w-full h-[350px] object-cover rounded-xl shadow-2xl hover:opacity-90 transition-opacity duration-300"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewProject;
