import styled, { keyframes } from 'styled-components';
import { bounceInDown } from 'react-animations';

const bounceInDownAnimation = keyframes`${bounceInDown}`;

export const Container = styled.div`
  animation: 1s ${bounceInDownAnimation};
  min-height: calc(100vh-50px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  svg {
    color: blueviolet;
  }
`;


export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  color: black;
`;

export const SubTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  color: blueviolet;
`;
