import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import { selectOperation } from 'redux/contacts/contactSelectors';
import { Loader } from 'components/Loader/Loader';
import { deleteContact } from 'redux/contacts/ContactOperations';
import {
  ContactWrap,
  Text,
  Button,
} from 'components/ContactList/ContactItem/ContactItem.styled';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const operation = useSelector(selectOperation);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ContactWrap>
        <Text>
          {name}
          <span>Phone: {number}</span>
        </Text>

        <Button type="button" onClick={handleDelete}>
          {operation === id ? (
            <Loader
              loading={operation === id}
              color={'blueviolet'}
              size={18}
            />
          ) : (
            <MdDeleteForever size={28} />
          )}
        </Button>
      </ContactWrap>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
