import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./app/components/Home";
import About from "./app/components/About";
import NotFound from "./app/components/NotFound";
import College from "./app/components/College";
import School from "./app/components/School";
import Nested from "./app/components/Nested";
import UserDetail from "./app/components/UserDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/nested",
          element: <Nested />,
          children: [
            {
              path: "college",
              element: <College />,
              children: [
                {
                  path: ":id",
                  element: <UserDetail />,
                },
              ],
            },
            {
              path: "school",
              element: <School />,
            },
          ],
        },
        {
          path: "/*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
