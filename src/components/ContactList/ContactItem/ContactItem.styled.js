import styled from 'styled-components';

export const ContactWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 5px 0;
`;

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  font-family: inherit;
  font-size: 18px;
  flex-grow: 1;
  span {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  svg {
    color: #bdbdbd;
  }
  &:hover {
    svg {
      color: blueviolet;
    }
  }
`;