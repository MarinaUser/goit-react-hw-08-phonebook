import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/ContactOperations';
import { selectVisibleContacts } from 'redux/contacts/contactSelectors';
import { selectValueFilter } from 'redux/contacts/contactSelectors';
import PropTypes from 'prop-types';

// import { List, Item, DelBtn  } from './ContactList.styled';


export function ContactList () {
  const dispatch = useDispatch(); 
  
  const contacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectValueFilter);

  const filtered = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered) {
    return (
      <ul>
        {filtered.map(({ id, name, phone }) => (
          <li key={id}>
            <span>{name}: </span>
            <span>{phone} </span>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              value="delete"
            >Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}


ContactList.propTypes = {
  contacts: PropTypes.array,
};
