import { Formik, Form, Field } from 'formik';

const init = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
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
            Password <Field type="text" name="password" required />
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
