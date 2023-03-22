import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/contacts/contactSelectors';
import { Container, Title, SubTitle, Image } from './Home.styled';
import phoneBook from 'utils/phoneBook.jpg';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  return (
    <Container>
      <Image src={phoneBook} alt="phonebook"/>
      <Title>Wellcome to your Phonebook,
        <SubTitle>
        {isLoggedIn
          ? `${name}!`
          : 'to enter, please log in or register'}
      </SubTitle>
      </Title>

    </Container>
  );
}