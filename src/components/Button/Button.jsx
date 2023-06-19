import classNames from "classnames";
import PropTypes from "prop-types";

import "./style.scss";

const Button = ({
  children,
  className,
  color,
  onClick,
  type,
  big,
  disable,
}) => {
  const buttonClassNames = classNames("btn", className, {
    "btn--purple": color === "purple",
    "btn--green": color === "green",
    "btn--red": color === "red",
    "btn--big": big,
    "btn--disable": disable === true,
  });

  return (
    <button className={buttonClassNames} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["purple", "red", "green"]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  big: PropTypes.bool,
  disable: PropTypes.bool,
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
  type: "button",
  big: false,
  disable: false,
};

export default Button;
