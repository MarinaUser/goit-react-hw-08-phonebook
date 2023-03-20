import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/ContactFilter/ContactFilter';
import  ContactList  from 'components/ContactList/ContactList';
import { useState } from 'react';
import { useAuth } from 'hooks';

export default function ContactsPage() {
  const [filter, setFilter] = useState('');
   const { isLoggedIn } = useAuth();


  const handleChange = e => {
    setFilter(e);
  };

  return (
    <div>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoggedIn && <Filter filter={filter} handleChange={handleChange} />}
      <ContactList filter={filter} />
    </div>
  );
}