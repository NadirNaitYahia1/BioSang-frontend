import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateRoutes = () => {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    if (userToken === null || userToken === 'undefined') {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, [window.location.pathname]); 

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
