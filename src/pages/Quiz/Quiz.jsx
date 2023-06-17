import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import "./style.scss";
import questions from "../data/data";
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleStartAgain = () => {
    setShowScore(0);
    setCurrentQuestion(0);
  };
  return (
    <Layout>
      <div className="quiz__container">
        {/* <h3>Score {currentQuestion}</h3>
         */}
        {/* <p>Question {currentQuestion} out of 10</p> */}

        {showScore ? (
          <div className="score__container">
            <h3> You have Scored {score}</h3>
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
                  onClick={() => handleAnswerButtonClick(answer.isCorrect)}
                  // color={answer.isCorrect?'green':'red'}
                >
                  {answer.answerText}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Quiz;
