import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import "./style.scss";
import questions from "../data/data";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerStatus, setAnswerStatus] = useState("");

  const handleAnswerButtonClick = (isCorrect, answerText) => {
    setSelectedOption(answerText);

    if (isCorrect) {
      setScore(score + 1);
      setAnswerStatus("correct");
    } else {
      setAnswerStatus("incorrect");
    }
  };

  const handleNextClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setAnswerStatus("");
    } else {
      setShowScore(true);
    }
  };

  const handleStartAgain = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setAnswerStatus("");
    setScore(0);
    setSelectedOption(null);
  };

  return (
    <Layout>
      <div className="quiz__container">
        {!showScore && <p>Question {currentQuestion + 1} out of 10</p>}
        {showScore ? (
          <div className="score__container">
            <h3>You have scored {score}</h3>
            <Button color="purple" onClick={handleStartAgain}>
              Restart
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
                  onClick={() =>
                    handleAnswerButtonClick(answer.isCorrect, answer.answerText)
                  }
                  color={`${
                    selectedOption === answer.answerText
                      ? answer.isCorrect
                        ? "green"
                        : "red"
                      : answer.isCorrect && answerStatus === "incorrect" // Add condition to show both red and green colors
                      ? "green"
                      : ""
                  }`}
                >
                  {answer.answerText}
                </Button>
              ))}
            </div>
            <div className="prenextbtn__container">
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
