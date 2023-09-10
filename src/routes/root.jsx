import { Outlet } from "react-router-dom";
import "./root.css";
import NavbarComponent from "../component/NavBarComponent";

function Root() {
  return (
    <>
      <NavbarComponent />
      <h3>Performance Measuring Stopwatch.</h3>
      <div className="container">
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Root;
