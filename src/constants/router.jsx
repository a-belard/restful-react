import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Dashboard from "../views/Dashboard";
import ErrorPage from "../views/ErrorPage";
import { MdDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { AiFillCar } from "react-icons/ai";
import Summary from "../components/Dashboard/Summary";
import Owners from "../components/Dashboard/Owners";
import Vehicles from "../components/Dashboard/Vehicles";

export const dashboardRoutes = [
  {
    path: "/dashboard/",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "/dashboard/owners",
    name: "Owners",
    icon: <FiUsers />,
  },
  {
    path: "/dashboard/vehicles",
    name: "Vehicles",
    icon: <AiFillCar />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/",
        element: <Summary />,
      },
      {
        path: "/dashboard/owners",
        element: <Owners />,
      },
      {
        path: "/dashboard/vehicles",
        element: <Vehicles />,
      },
    ],
  },
]);
