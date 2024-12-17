import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem("token");
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return element;
};

export default PrivateRoute;
