import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/ContactOperations';
import { selectContacts } from 'redux/contacts/contactSelectors';
import { nanoid } from 'nanoid';

// import { FormContact, FormLabel, FormInput, AddBtn } from './Form.styled';

export  function  ContactForm()  {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(
          addContact({
            id: nanoid(),
            name: name,
            number: number,
          })
        );
    
      setName('');
      setNumber('');
  };
  
    return (
      <form onSubmit={handleSubmit}>
        <label >
          Name
          <input
            value={name}
            onChange={e => setName(e.currentTarget.value)}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label >
          Number
          <input
            value={number}
            onChange={e => setNumber(e.currentTarget.value)}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">
          Add contact
        </button>
      </form>
    );
  }
