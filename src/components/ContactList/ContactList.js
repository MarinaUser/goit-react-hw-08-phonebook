import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contactSelectors';

import { ContactItem } from 'components/ContactList/ContactItem/ContactItem';
import {
  ContactsList,
  ContactListItem,
} from 'components/ContactList/ContactList.styled';

const ContactList = () => {
  const visibleСontacts = useSelector(selectVisibleContacts);

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



