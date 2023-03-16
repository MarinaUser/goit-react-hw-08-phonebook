import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/ContactOperations';
import { selectError, selectIsLoading } from 'redux/contacts/contactSelectors';

import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';

// import { Title, Contacts } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <title>Phonebook</title>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader/>}
      <ContactList />
    </>
  );
};