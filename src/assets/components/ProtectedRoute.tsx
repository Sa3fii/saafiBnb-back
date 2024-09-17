import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
// import { AppAuthContext } from '../core/contexts/AppAuthProvider';
import { decodeJwt } from 'jose';


interface ProtectedRouteProps {
    children?: React.ReactElement;
  }

const ProtectedRoute : React.FC<ProtectedRouteProps> = ({ children }) => {

//   const { userToken,userData} = useContext(AppAuthContext);
//   if (!userToken) return <Navigate to="/signin" />

  return children ? children : <Outlet />;
};

export default ProtectedRoute;


