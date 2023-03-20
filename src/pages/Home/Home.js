import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/contacts/contactSelectors';
import { Container, Title, SubTitle } from './Home.styled';
import { IoIosBookmarks } from "react-icons/io";

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  return (
    <Container>
      
      <IoIosBookmarks size={70} />
      <Title>Wellcome to your Phonebook,</Title>
      <SubTitle>
        {isLoggedIn
          ? `${name}!`
          : 'to enter, please log in or register'}
      </SubTitle>
    </Container>
  );
}