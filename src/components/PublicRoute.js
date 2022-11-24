import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, redirect }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return !isLoggedIn ? children : <Navigate to={redirect} />;
};
export default PublicRoute;
