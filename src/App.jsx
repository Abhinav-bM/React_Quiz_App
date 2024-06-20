import { useState } from "react";
import questions from "../question.json";
import "./App.css";
import Comp1 from "./components/Comp1";

function App() {
  const [select, setSelect] = useState(0);
  const [score, setScore] = useState(null);
  const [ans, setAns] = useState([]);

  const showScore = () => {
    let newScore = 0;
    questions.forEach((data) => {
      if (ans.includes(data.answer)) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="main_div">
      {questions &&
        questions.map((q, index) => {
          if (index <= select) {
            return (
              <>
                {select >= 0 && (
                  <Comp1
                    questions={questions[index]}
                    setSelect={setSelect}
                    ans={ans[index]}
                    setAns={setAns}
                  />
                )}
              </>
            );
          }
        })}
      <div>
        {select === questions.length && <button onClick={showScore}>show score</button>}
        {score && <h2>Score : {score}</h2>}
      </div>
    </div>
  );
}

export default App;
