import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-midnight text-white p-4 rounded-lg">
      {/* Suggestions Count */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <span className="text-lg font-bold">6 Suggestions</span>
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Sort by:</span>
        <select
          className="bg-transparent text-white font-medium focus:outline-none"
          defaultValue="Most Upvotes"
        >
          <option value="Most Upvotes">Most Upvotes</option>
          <option value="Least Upvotes">Least Upvotes</option>
          <option value="Most Comments">Most Comments</option>
          <option value="Least Comments">Least Comments</option>
        </select>
      </div>

      {/* Add Feedback Button */}
      <button className="px-4 py-2 bg-purple-600 text-white text-sm font-bold rounded-lg hover:bg-purple-700 transition-all">
        + Add Feedback
      </button>
    </header>
  );
};

export default Header;
