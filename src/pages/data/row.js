if (selectedOption === answer.answerText) {
  if (answer.isCorrect) {
    color = "green";
  } else {
    color = "red";
  }
} else if (answer.isCorrect && answerStatus === "incorrect") {
  color = "green";
} else {
  color = "";
}
