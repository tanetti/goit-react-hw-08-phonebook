import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PublicRestrictedRoute = ({
  component: Component,
  redirectTo = '/phonebook',
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};