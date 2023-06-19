import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import "./style.scss";
import questions from "../data/data";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selected, setSelected] = useState("");

  const handleAnswerButtonClick = (isCorrect, answerText) => {
    setSelected(answerText);
    if (isCorrect) {
      setScore(score + 1);
    }
  };
  const handleNextClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handlePrevClick = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion > -1) {
      setCurrentQuestion(prevQuestion);
    }
  };

  const handleStartAgain = () => {
    setShowScore(false);
    setCurrentQuestion(0);
  };
  return (
    <Layout>
      <div className="quiz__container">
        {!showScore && <p>Question {currentQuestion} out of 10</p>}
        {showScore ? (
          <div className="score__container">
            <h3>You have scored {score}</h3>
            <Button color="purple" onClick={handleStartAgain}>
              Start Again
            </Button>
          </div>
        ) : (
          <div className="question__container">
            <p>{questions[currentQuestion].questionText}</p>
            <div className="answerbtn__container">
              {questions[currentQuestion].answerOptions.map((answer) => (
                <Button
                  big
                  key={answer.answerText}
                  color={selected === answer.answerText && "purple"}
                  onClick={() =>
                    handleAnswerButtonClick(answer.isCorrect, answer.answerText)
                  }
                >
                  {answer.answerText}
                </Button>
              ))}
            </div>
            <div className="prenextbtn__container">
              <Button
                color="purple"
                onClick={handlePrevClick}
                // disable={currentQuestion === 0 && true}
              >
                Prev
              </Button>
              <Button color="purple" onClick={handleNextClick}>
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Quiz;
