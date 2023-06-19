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
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { getItem, removeItem } from "../utils/storage";

// eslint-disable-next-line react/prop-types
const AuthRoute = ({ component: Component }) => {
  // Check if the user is authenticated
  const isAuthenticated = () => {
    try {
      const token = getItem("token");
      if (token) {
        // Decode the token
        const decodedToken = jwtDecode(token);
        // Check if the token is still valid (e.g., not expired)
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) {
          return true;
        }
        removeItem("token");
      }
    } catch (error) {
      removeItem("token");
    }
    return false;
  };

  return isAuthenticated() ? (
    <Component />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default AuthRoute;

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
    element: <AuthRoute component={Dashboard} />,
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
