import React, { useState } from "react";
import Search from "./smallComponents/Search"; // Adjust path if needed
import { Card } from "./smallComponents/Card";
import projectsData from "../data/project.json";

const SearchSection = () => {
  const [query, setQuery] = useState("");

  // Filter logic: match projectname, username, or tags
  const filteredProjects = projectsData
    .filter((project) =>
      [project.projectname, project.username, ...(project.tags || [])]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    )
    .slice(0, 12); // Limit to 12 cards

  return (
    <div className="p-6 space-y-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-start">
          <img
            src="Mark.svg" // Replace with your image path
            alt="Search Visual"
            className="max-w-[220px] max-h-[90px] w-auto h-auto rounded-2xl transform transition duration-500 ease-in-out hover:rotate-[360deg] hover:scale-90"
          />
        </div>

        {/* Right Search Bar */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Search query={query} setQuery={setQuery} />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
