import { useState } from "react";
import { SortButton } from "../components/common/Button";
import FeedbackCard from "../components/common/feedBacks";

const HomePage = () => {
  const [sortOption, setSortOption] = useState<string>("Most Upvotes");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const sortOptions = ["Most Upvotes", "Newest", "Oldest"];

  const handleSortChange = (option: string): void => {
    setSortOption(option);
  };

  const [feedbackList, setFeedbackList] = useState([
    {
      id: 1,
      votes: 112,
      title: "Add tags for solutions",
      description: "Easier to search for solutions based on a specific stack.",
      category: "Enhancement",
      comments: 2,
    },
    {
      id: 2,
      votes: 99,
      title: "Add a dark theme option",
      description:
        "It would help people with light sensitivities and who prefer dark mode.",
      category: "Feature",
      comments: 4,
    },
    {
      id: 3,
      votes: 65,
      title: "Q&A within the challenge hubs",
      description: "Challenge-specific Q&A would make for easy reference.",
      category: "Feature",
      comments: 1,
    },
    {
      id: 4,
      votes: 51,
      title: "Allow image/video upload to feedback",
      description: "Images and screencasts can enhance comments on solutions.",
      category: "Enhancement",
      comments: 2,
    },
    {
      id: 5,
      votes: 45,
      title: "Add customizable widgets",
      description: "Widgets for more tailored user experiences.",
      category: "Feature",
      comments: 3,
    },
    {
      id: 6,
      votes: 34,
      title: "Improve accessibility options",
      description: "Better support for screen readers and keyboard navigation.",
      category: "Enhancement",
      comments: 1,
    },
    {
      id: 7,
      votes: 29,
      title: "Add multi-language support",
      description: "Support for more languages to cater to a global audience.",
      category: "Feature",
      comments: 5,
    },
  ]);

  // Separate filtered list
  const [filteredFeedbackList, setFilteredFeedbackList] =
    useState(feedbackList);

  // const handleCategoryChange = (category: string) => {
  //   setSelectedCategory(category);
  //   setFilteredFeedbackList(
  //     category === "All"
  //       ? feedbackList
  //       : feedbackList.filter((feedback) => feedback.category === category)
  //   );
  // };
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setFilteredFeedbackList(
      feedbackList.filter(
        (feedback) => category === "All" || feedback.category === category
      )
    );
  };

  const handleVote = (id: number, newVote: number) => {
    // Update the original feedbackList
    const updatedFeedbackList = feedbackList.map((item) =>
      item.id === id ? { ...item, votes: newVote } : item
    );

    // Update the original and filtered lists
    setFeedbackList(updatedFeedbackList);
    setFilteredFeedbackList(
      updatedFeedbackList.filter(
        (feedback) =>
          selectedCategory === "All" || feedback.category === selectedCategory
      )
    );
  };

  return (
    <main className="overflow-y-auto h-screen w-screen bg-gray flex flex-col space-x-10  px-40 py-32 ">
      <section className="flex flex-row  space-x-6">
        <div className="w-[400px] bg-gray p-6 rounded-lg shadow-sm">
          {/* Sidebar */}
          <div className="bg-gradient-to-r from-blue via-purple to-pink h-[150px] text-white p-6 rounded-lg mb-6 z-40">
            <div className="mt-12">
              <h1 className="text-2xl font-bold font-jost">Frontend Mentor</h1>
              <p className="text-lg font-medium font-jost">Feedback Board</p>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <h2 className="sr-only">Categories</h2>
            <div className="flex flex-wrap w-[250px] gap-2">
              {["All", "UI", "UX", "Enhancement", "Bug", "Feature"].map(
                (category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 text-sm font-bold font-jost rounded-xl transition-all ${
                      category === selectedCategory
                        ? "bg-blue text-white"
                        : "bg-gray text-blue"
                    }`}
                    onClick={() => handleCategoryChange(category)}
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
        </div>

        {/* Main Content */}
        <div className="w-full bg-gray p-6 rounded-lg shadow-sm">
          <header className="flex items-center justify-between bg-midnightBlue text-white p-4 rounded-lg mb-6">
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
              <span className="text-sm font-bold font-jost">
                {filteredFeedbackList.length} Suggestions
              </span>

              {/* Sort Dropdown */}
              <SortButton
                options={sortOptions}
                selectedOption={sortOption}
                onOptionSelect={handleSortChange}
              />
            </div>

            {/* Add Feedback Button */}
            <button className="px-4 py-2 bg-purple text-white text-sm font-bold font-jost rounded-lg hover:bg-purple transition-all">
              + Add Feedback
            </button>
          </header>

          {/* Feedback List */}
          <div
            className="overflow-hidden overflow-y-auto max-h-[500px] space-y-4"
            style={{ maxHeight: "500px" }}
          >
            {/* {filteredFeedbackList.map((feedback) => (
              <FeedbackCard
                key={feedback.id}
                {...feedback}
                onVote={(newVote) => handleVote(feedback.id, newVote)}
                className="hover:shadow-lg transition-shadow duration-200"
              />
            ))} */}
            {filteredFeedbackList.map((feedback) => (
              <FeedbackCard
                key={feedback.id}
                {...feedback}
                onVote={handleVote}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
