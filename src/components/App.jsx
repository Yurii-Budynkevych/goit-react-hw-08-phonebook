import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header/Header';
import { fetchCurrentUser } from 'redux/operations/authOperations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import './App.css';

const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.auth.isFetching);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  if (isFetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <Header />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirect="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <PublicRoute redirect="/contacts">
                <RegisterPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute redirect="/contacts">
                <LoginPage />
              </PublicRoute>
            }
          ></Route>
          <Route path="*" element={<Navigate to={'/login'} />} />
        </Routes>
      </Suspense>
    </>
  );
};
