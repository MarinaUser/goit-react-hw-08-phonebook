import { ThreeCircles } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
    return (
        <Container>
        <ThreeCircles
  height="60"
  width="60"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor="blueviolet"
  innerCircleColor="blueviolet"
  middleCircleColor="blueviolet"
    />
        </Container>)
 }