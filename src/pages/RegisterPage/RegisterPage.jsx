import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations/authOperations';

const init = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <h1 className="title">Create an account</h1>
      <Formik initialValues={init} onSubmit={onSubmit}>
        <Form className="form" autoComplete="off">
          <label>
            Name{' '}
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            E-mail <Field type="email" name="email" required />
          </label>
          <label>
            Password{' '}
            <Field
              type="password"
              name="password"
              pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{6,}$"
              title="At least 7 charackters: letters (latin) or numbers (0-9) or -_\. allowed"
              required
            />
          </label>
          <button className="btn" type="sumbit">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};
export default RegisterPage;
