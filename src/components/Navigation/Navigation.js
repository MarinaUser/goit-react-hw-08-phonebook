import { useAuth } from 'hooks';
import { Wrapper, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrapper>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isLoggedIn && <StyledNavLink to="/contacts">Phonebook</StyledNavLink>}
      </nav>
    </Wrapper>
  );
};
