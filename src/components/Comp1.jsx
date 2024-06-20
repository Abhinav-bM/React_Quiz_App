import { useState } from "react";

const Comp1 = ({ questions, setSelect, ans, setAns }) => {
  return (
    <>
      <div className="mainCard">
        <h4>Question : {questions.question}</h4>

        {questions &&
          questions.options.map((opt, id) => (
            <>
              <input
                name="radio"
                type="checkbox"
                value={opt}
                onClick={(e) => {
                  setAns((prev) => [...prev, e.target.value]),
                    setSelect((prev) => (prev += 1));
                }}
              />
              <label key={id}>{opt}</label>
            </>
          ))}
        {ans && <p>Selected : {ans}</p>}
      </div>
    </>
  );
};

export default Comp1;
