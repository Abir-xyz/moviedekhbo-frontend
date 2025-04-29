import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !user) {
    return <Navigate to='/warning' />;
  }

  return children;
};

export default PrivateRoute;
