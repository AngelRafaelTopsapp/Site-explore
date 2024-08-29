import { Suspense, lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";

const QuizPage = lazy(() => import("./pages/App/QuizPage/QuizPage"));
const FlowersPage = lazy(() => import("./pages/App/FlowersPage/FlowersPage"));
const CandyCrushPage = lazy(() => import("./pages/App/CandyCrushPage/CandyCrushPage"));
const Message = lazy(() => import("./pages/App/Message/Message"));
const ErrorPage = lazy(() => import("./components/ErrorPage/ErrorPage"));
const Loading = lazy(() => import("./components/Loading/Loading"));
const App = lazy(()=> import("./pages/App/App"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [

      {
        path: "/quiz",
        element: (
          <Suspense fallback={<Loading />}>
            <QuizPage />
          </Suspense>
        ),
      },
      {
        path: "/flowers",
        element: (
          <Suspense fallback={<Loading />}>
            <FlowersPage />
          </Suspense>
        ),
      },
      {
        path: "/message",
        element: (
          <Suspense fallback={<Loading />}>
            <Message />
          </Suspense>
        ),
      },
      {
        path: "/candycrush",
        element: (
          <Suspense fallback={<Loading />}>
            <CandyCrushPage />
          </Suspense>
        ),
      },
    ],
  },
]);

// Render app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
