import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/operations/authOperations';

const init = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <>
      <h1 className="title">Please authorise</h1>
      <Formik initialValues={init} onSubmit={onSubmit}>
        <Form className="form" autoComplete="off">
          <label>
            E-mail <Field type="email" name="email" required />
          </label>
          <label>
            Password <Field type="password" name="password" required />
          </label>
          <button className="btn" type="sumbit">
            LogIn
          </button>
        </Form>
      </Formik>
    </>
  );
};
export default LoginPage;
