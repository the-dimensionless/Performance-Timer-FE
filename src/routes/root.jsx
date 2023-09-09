import { Link, Outlet } from "react-router-dom";
import "./root.css";

const pages = [
  {
    name: "Measure Performance",
    link: "/measure-performance",
  },
  {
    name: "Show Performance",
    link: "/show-performance",
  },
];

function Root() {
  return (
    <div className="container">
      <nav className="nav">
        <h3>Performance Measuring Stopwatch.</h3>
        <ul className="menu">
          {pages.map((page, index) => (
            <li key={index}>
              <Link to={page.link}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
}
export default Root;
