import { useState } from "react";
import { SortButton } from "../components/common/Button";

const HomePage = () => {
  const [sortOption, setSortOption] = useState<string>("Most Upvotes");

  const sortOptions = ["Most Upvotes", "Newest", "Oldest"];

  const handleSortChange = (option: string): void => {
    setSortOption(option);
    console.log(`Selected sorting option: ${option}`);
  };
  return (
    <main className="overflow-y-auto h-screen w-screen bg-zinc flex flex-col space-x-10  px-40 py-32 ">
      <section className="flex flex-col space-y-6 space-x-0">
        {/* <aside className="w-72 bg-gray p-6 rounded-lg shadow-sm"> */}
        {/* Header */}
        <div className="bg-gradient-to-r from-blue via-purple to-pink  text-white p-6 rounded-lg mb-6 z-40">
          <h1 className="text-sm font-bold font-jost">Frontend Mentor</h1>
          <p className="text-xs font-medium font-jost">Feedback Board</p>
        </div>

        {/* Categories */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <h2 className="sr-only">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {["All", "UI", "UX", "Enhancement", "Bug", "Feature"].map(
              (category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue rounded-full hover:bg-blue transition-all"
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
            <a href="#" className="text-blue text-sm hover:underline">
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
              <span className="font-bold text-midnightBlues">2</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="block w-3 h-3 bg-blue rounded-full"></span>
                <p className="text-midnightBlue font-jost font-regular">
                  In-Progress
                </p>
              </div>
              <span className="font-jost font-bold text-midnightBlue">3</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="block w-3 h-3 bg-lightBlue rounded-full"></span>
                <p className="text-midnightBlue  font-regular">Live</p>
              </div>
              <span className="font-bold text-midnightBlue">1</span>
            </li>
          </ul>
        </div>
        {/* </aside> */}
      </section>

      <header className="flex items-center justify-between bg-midnightBlue text-white p-4 rounded-lg">
        {/* Suggestions Count */}
        <div className="flex items-center gap-4">
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
          <span className="text-sm font-bold font-jost">6 Suggestions</span>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 ">
          <SortButton
            options={sortOptions}
            selectedOption={sortOption}
            onOptionSelect={handleSortChange}
          />
          {/* <span className="text-xs font-regular font-jost">Sort by:</span>
          <select
            className="bg-transparent text-white font-semibold font-jost focus:outline-none"
            defaultValue="Most Upvotes"
          >
            <option className="text-midnightBlue" value="Most Upvotes">
              Most Upvotes
            </option>
            <option className="text-midnightBlue" value="Least Upvotes">
              Least Upvotes
            </option>
            <option className="text-midnightBlue" value="Most Comments">
              Most Comments
            </option>
            <option className="text-midnightBlue" value="Least Comments">
              Least Comments
            </option>
          </select> */}
        </div>

        {/* Add Feedback Button */}
        <button className="px-4 py-2 bg-purple text-white text-sm font-bold font-jost rounded-lg hover:bg-purple transition-all">
          + Add Feedback
        </button>
      </header>
    </main>
  );
};

export default HomePage;
