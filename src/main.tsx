import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { KeyStroke } from "./KeyStroke.tsx";
import { WebComponentDemo } from "./WebComponentDemo.tsx";
import { getConfig } from "./config.ts";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/keystroke",
      element: <KeyStroke />,
    },
    {
      path: "web-component",
      element: <WebComponentDemo />,
    },
  ],
  {
    basename: getConfig().basename,
  }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
