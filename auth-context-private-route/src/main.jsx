import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./componets/Home/Home.jsx";
import Login from "./componets/Login/Login.jsx";
import Register from "./componets/Register/Register.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Orders from "./componets/Orders/Orders.jsx";
import PrvateRoute from "./Routes/PrvateRoute.jsx";
import Profile from "./componets/Profile/Profile.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/orders",
        element: <PrvateRoute> <Orders></Orders> </PrvateRoute>
      },
      {
        path: "/profile",
        element: <PrvateRoute> <Profile></Profile> </PrvateRoute>
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
