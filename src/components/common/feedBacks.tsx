import { useState } from "react";
import { VoteButton } from "./Button";
const Feedback_Template = () => {
  const [votes, setVotes] = useState(0);
  const handleVote = () => {
    setVotes((prevVotes) => (prevVotes === 0 ? 1 : 0));
  };

  return (
    <div className="px-8 py-7 bg-white hover:cursor-pointer rounded-lg">
      <VoteButton votes={votes} onVote={handleVote} />
    </div>
  );
};

export default Feedback_Template;
