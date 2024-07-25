import Home from "./ui/Home";
import About from "./ui/About";
import Store from "./ui/Store";
import Error from "./ui/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
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
        path: "/store",
        element: <Store />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
