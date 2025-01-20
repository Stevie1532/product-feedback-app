import { VoteButton } from "./Button";

type FeedbackCardProps = {
  id: number;
  votes: number;
  title: string;
  description: string;
  category: string;
  comments: number;
  onVote: (id: number, newVote: number) => void; // Callback to handle vote updates
  className?: string; // Optional className for custom styling
};

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  id,
  votes,
  title,
  description,
  category,
  comments,
  onVote,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-between bg-white p-6 mb-4 rounded-lg shadow-md ${className}`}
    >
      {/* Vote Button */}
      <VoteButton
        votes={votes}
        onVote={(newVote) => onVote(id, newVote)}
        className=""
      />

      {/* Feedback Content */}
      <div className="ml-6 flex-1">
        <h2 className="text-lg font-bold text-midnightBlue">{title}</h2>
        <p className="text-darkGray">{description}</p>
        <span className="inline-block mt-3 px-3 py-1 text-sm text-blue bg-gray rounded-lg">
          {category}
        </span>
      </div>

      {/* Comments Section */}
      <div className="flex items-center text-gray-600">
        <span className="text-xl text-grey">💬</span>
        <span className="ml-2 text-darkGray font-bold">{comments}</span>
      </div>
    </div>
  );
};

export default FeedbackCard;
