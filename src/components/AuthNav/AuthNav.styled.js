import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #4B0082;
  &:hover,
  &:focus {
    color: black;
  }
  &.active {
    color: #ffffff;
  }
`; 