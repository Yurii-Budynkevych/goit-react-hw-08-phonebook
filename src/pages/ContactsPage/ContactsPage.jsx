import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../../components/Form/Form';
import ContactList from '../../components/Contacts/Contacts';
import Filter from '../../components/Filter/Filter';
import { filterSliseReducer } from '../../redux/filterSlice';
import {
  addContactOperation,
  fetchContactsOperation,
} from '../../redux/operations/contactsOperations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);
  const loader = useSelector(state => state.contacts.isLoading);
  const contactsValue = useSelector(state => state.contacts.items);

  const submitHandler = (values, { resetForm }) => {
    if (contactsValue.some(obj => obj.name === values.name)) {
      resetForm();
      return window.alert(`${values.name} is already in contacts`);
    }
    dispatch(addContactOperation(values));
    resetForm();
  };

  const filterHandler = e => {
    dispatch(filterSliseReducer(e.target.value));
  };
  const normalizedFilter = filterValue.toLowerCase();
  const visibleContacts = contactsValue.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    dispatch(fetchContactsOperation());
  }, [dispatch]);
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={submitHandler} />
      <h2 className="subtitle">Contacts</h2>
      <Filter value={filterValue} onFilter={filterHandler} />
      {loader ? <h2>Loading...</h2> : <ContactList arr={visibleContacts} />}
    </>
  );
};
export default ContactsPage;
