import "./style.scss";
import Button from "../../components/Button/Button";

const Questions = (props) => {
  console.log(props);
  return (
    <div className="question__container">
      <p>
        What was the name of Captain Nemo's submarine in 20,000 Leagues Under
        the Sea?
      </p>
      <div className="answerbtn__container">
        <Button big>Jupitus</Button>
        <Button big>Jupitus</Button>
        <Button big>Jupitus</Button>
        <Button big>Jupitus</Button>
      </div>
    </div>
  );
};

export default Questions;
