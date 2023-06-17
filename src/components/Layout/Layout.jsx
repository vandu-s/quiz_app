import "./style.scss";
const Layout = ({ children }) => {
  return (
    <div className="layout__container">
      <div className="layout__child">{children}</div>
    </div>
  );
};

export default Layout;
