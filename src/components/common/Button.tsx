import React, { useState } from "react";

type ButtonType = "delete" | "cancel" | "add" | "save" | "edit";

interface ButtonProps {
  type: ButtonType; // Button action type
  onClick: () => void; // Click handler
  disabled?: boolean; // Whether the button is disabled
  className?: string; // Additional CSS classes for customization
  children?: React.ReactNode; // Custom button text (optional)
}

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  disabled = false,
  className = "",
  children,
}) => {
  const baseClass =
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200";

  const typeStyles: Record<ButtonType, string> = {
    delete:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 focus:ring-2",
    cancel:
      "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400 focus:ring-2",
    add: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 focus:ring-2",
    save: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-2",
    edit: "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400 focus:ring-2",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${typeStyles[type]} ${className}`}
    >
      {children || type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  );
};

export { Button };

// import React, { useState } from "react";

interface SortButtonProps {
  options: string[]; // Array of sorting options
  selectedOption: string; // Currently selected option
  onOptionSelect: (option: string) => void; // Callback to handle option selection
}

const SortButton: React.FC<SortButtonProps> = ({
  options,
  selectedOption,
  onOptionSelect,
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string): void => {
    onOptionSelect(option);
    setMenuOpen(false); // Close the menu after selecting an option
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 text-white hover:text-slate-50 hover:opacity-50"
        id="sort-button"
        type="button"
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        aria-controls="sort-menu"
        onClick={toggleMenu}
      >
        <p className="font-regular text-xs tablet:text-14x cursor-pointer">
          Sort by :
        </p>
        <span className="font-bold text-xs  mr-2 leading-20 tracking-close">
          {selectedOption}
        </span>
        <span>
          <svg
            className={`h-2 w-2 stroke-white ${
              menuOpen ? "rotate-180" : ""
            } transition-transform`}
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="2"></path>
          </svg>
        </span>
      </button>
      {menuOpen && (
        <ul
          id="sort-menu"
          className="absolute  text-midnightBlue mt-7 w-48 rounded-lg shadow-lg"
          role="menu"
          aria-labelledby="sort-button"
        >
          {options.map((option) => (
            <li
              key={option}
              className={`px-6 py-3 hover:bg-gray cursor-pointer ${
                option === selectedOption ? "bg-gray" : ""
              }`}
              role="menuitem"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { SortButton };
interface VoteButtonProps {
  votes: number; // Number of votes
  onVote: (newVote: number) => void; // Callback to handle voting
  className?: string; // Additional CSS classes for customization
}

const VoteButton: React.FC<VoteButtonProps> = ({
  votes,
  onVote,
  className = "",
}) => {
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  const handleVote = (): void => {
    const newVote = hasVoted ? votes - 1 : votes + 1;
    onVote(newVote);
    setHasVoted(!hasVoted);
  };

  return (
    <button
      onClick={handleVote}
      className={`flex flex-col items-center space-y-1 px-4 py-2 w-12 text-sm font-medium rounded-lg focus:outline-none focus:ring transition-all duration-200 ${
        hasVoted ? "bg-blue" : "bg-gray"
      } ${className}`}
    >
      <svg
        className={`h-5 w-5 ${
          hasVoted
            ? "text-white font-jost font-regular"
            : "text-midnightBlue font-jost font-regular"
        }`}
        fill="none"
        stroke={hasVoted ? "white" : "midnightBlue"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={hasVoted ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
        ></path>
      </svg>
      <span
        className={
          hasVoted
            ? "text-white font-jost font-regular"
            : "text-midnightBlue font-jost font-regular"
        }
      >
        {votes}
      </span>
    </button>
  );
};

export { VoteButton };
