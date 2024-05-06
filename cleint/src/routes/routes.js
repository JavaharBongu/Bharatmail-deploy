import { lazy } from "react";

const Main = lazy(() => import("../Pages/Main"));
const Email = lazy(() => import("../Components/Emails"));
const ViewEmail = lazy(() => import("../Components/ViewEmail"));

const routes = {
  main: {
    path: "/",
    element: Main,
  },
  emails: {
    path: "/emails",
    element: Email,
  },
  invalid: {
    path: "/*",
    element: Email,
  },
  view: {
    path: "/view",
    element: ViewEmail,
  },
};
export {routes};
