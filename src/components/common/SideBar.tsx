import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-72 bg-gray-100 p-6 rounded-lg shadow-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white p-6 rounded-lg mb-6">
        <h1 className="text-xl font-bold">Frontend Mentor</h1>
        <p className="text-sm font-medium">Feedback Board</p>
      </div>

      {/* Categories */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <h2 className="sr-only">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {["All", "UI", "UX", "Enhancement", "Bug", "Feature"].map(
            (category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium text-white bg-blue rounded-full hover:bg-blue-200 transition-all"
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>

      {/* Roadmap */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-md font-bold">Roadmap</h2>
          <a href="#" className="text-blue-500 text-sm hover:underline">
            View
          </a>
        </div>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="block w-3 h-3 bg-brown rounded-full"></span>
              <p className="text-midnightBlue font-jost font-regular">
                Planned
              </p>
            </div>
            <span className="font-bold text-gray-900">2</span>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="block w-3 h-3 bg-blue rounded-full"></span>
              <p className="text-midnightBlue font-jost font-regular">
                In-Progress
              </p>
            </div>
            <span className="font-jost font-bold text-gray-900">3</span>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="block w-3 h-3 bg-lightBlue rounded-full"></span>
              <p className="text-gray-700 font-regular">Live</p>
            </div>
            <span className="font-bold text-midnightBlue">1</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
