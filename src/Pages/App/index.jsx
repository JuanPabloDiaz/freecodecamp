import PropTypes from "prop-types";
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import { AppProvider } from "../../Context";

import { AuthProvider } from "../../Context/auth"; // AuthContext is the context that will be used to store the user's data
import Navbar from "../../Components/Navbar";
import NavbarMobile from "../../Components/Navbar/mobile";
import Footer from "../../Components/Footer";
import "./App.css";

import Home from "../Home";
import NotFound from "../NotFound";
import MyAccount from "../MyAccount";
import SignIn from "../SignIn";
import TicTacToe from "../TicTacToe";
import Pomodoro from "../Pomodoro";
import Calculator from "../Calculator";
import Quote from "../Quote";
import Markdown from "../Markdown";
import Drum from "../Drum";
import Simon from "../Simon";
import Weather from "../Weather";
import Twitch from "../Twitch";
import Wikipedia from "../Wikipedia";

// import Logout from "../Logout";

// Implementing the Private and Public Routes:
import { useAuth } from "../../Context/auth"; // make sure you have a useAuth hook in your auth context

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/sign-in" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? <Navigate to="/" /> : children;
};
PublicRoute.propTypes = {
  children: PropTypes.node,
};

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Pomodoro", element: <Pomodoro /> },
    { path: "/Calculator", element: <Calculator /> },
    { path: "/Quote", element: <Quote /> },
    { path: "/Markdown", element: <Markdown /> },
    { path: "/Drum", element: <Drum /> },
    { path: "/Simon", element: <Simon /> },
    { path: "/Weather", element: <Weather /> },
    { path: "/Twitch", element: <Twitch /> },
    { path: "/Wikipedia", element: <Wikipedia /> },
    // Private Routes

    {
      path: "/my-account",
      element: (
        <PrivateRoute>
          <MyAccount />
        </PrivateRoute>
      ),
    },
    // {
    //   path: "/logout",
    //   element: (
    //     <PrivateRoute>
    //       <Logout />
    //     </PrivateRoute>
    //   ),
    // },
    // Public Routes
    {
      path: "/sign-in",
      element: (
        <PublicRoute>
          <SignIn />
        </PublicRoute>
      ),
    },
    {
      path: "/TicTacToe",
      element: (
        <PublicRoute>
          <TicTacToe />
        </PublicRoute>
      ),
    },
    // Not Found
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <AuthProvider>
          <NavbarMobile />
          <AppRoutes />
          <Navbar />
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </AppProvider>
  );
};
export default App;
