import Sidebar from "../sidebar";
import "./styles.css"; // Create a Layout.css file for additional styling

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="d-flex" id="wrapper">
      {/* Sidebar */}
      <Sidebar />

      {/* Page Content Wrapper */}
      <div id="page-content-wrapper">
        {/* Main Content */}
        <div className="container-fluid">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
