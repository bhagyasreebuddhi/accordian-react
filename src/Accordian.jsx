import { useState } from "react";

const Accordian = ({ question, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="accordianSection">
        <div className="titleWrapper" onClick={() => setIsActive(!isActive)}>
          <p>{question}</p>
          <button>{isActive ? "-" : "+"}</button>
        </div>
        {isActive && <p className="accordianBody">{content}</p>}
      </div>
    </div>
  );
};

export default Accordian;
