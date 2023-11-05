import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";


const ProtectedRoute = ({ user, children }) => {
    
    if (!user) {
      return <Navigate to="/loging" replace />;
    }
    return children;
  };

  export default ProtectedRoute