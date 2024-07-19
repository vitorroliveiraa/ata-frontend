import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TabCustom from "./components/tabCustom/index.tsx";
import Registration from "./pages/registration/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // Lifted blog splat route
        path: "/",
        element: <TabCustom />,
      },
      { path: "/criar", element: <Registration /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
