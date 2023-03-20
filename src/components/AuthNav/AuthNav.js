import { StyledNavLink } from './AuthNav.styled';

 export const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/register">Sign up</StyledNavLink>
      <StyledNavLink to="/login">Sign in</StyledNavLink>
    </div>
  );
};

