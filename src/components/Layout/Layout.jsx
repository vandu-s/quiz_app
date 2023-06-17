import "./style.scss";
import quizLogo from "../../assets/reactquizlogo.svg";

const Layout = ({ children }) => {
  return (
    <div className="layout__container">
      <img src={quizLogo} alt="react-quiz_img" />
      <div className="layout__child">{children}</div>
    </div>
  );
};

export default Layout;
