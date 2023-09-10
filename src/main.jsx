import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root.jsx";
import MeasurePerformance from "./pages/MeasurePerformance/MeasurePerformance.jsx";
import ShowPerformance from "./pages/ShowPerformance/ShowPerformance.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/measure-performance",
        element: <MeasurePerformance />,
      },
      {
        path: "/show-performance",
        element: <ShowPerformance />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
