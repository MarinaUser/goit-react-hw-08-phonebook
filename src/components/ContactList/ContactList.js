import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contactSelectors';
import { useEffect } from 'react';
import { getContacts } from 'redux/contacts/ContactOperations';

import { ContactItem } from 'components/ContactList/ContactItem/ContactItem';
import {
  ContactsList,
  ContactListItem,
} from 'components/ContactList/ContactList.styled';

const ContactList = () => {
  const visibleСontacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

   useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ContactsList>
      {visibleСontacts.map(contact => (
        <ContactListItem key={contact.id}>
          <ContactItem contact={contact} />
        </ContactListItem>
      ))}
    </ContactsList>
  );
};

export default ContactList;



