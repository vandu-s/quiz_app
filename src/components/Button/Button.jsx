import classNames from "classnames";
import PropTypes from "prop-types";

import "./style.scss";
const Button = ({ children, className, color, onClick, type, big }) => {
  const buttonClasseNames = classNames("btn", className, {
    "btn--purple": color === "purple",
    "btn--green": color === "green",
    "btn--red": color === "red",
    "btn--big": big,
  });
  return (
    <button className={buttonClasseNames} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;

Button.propsTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["purple", "red", "green"]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  big: PropTypes.bool,
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
  type: "button",
  big: false,
};
