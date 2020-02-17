import styled from 'styled-components';

const Left = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-image: ${props => `url(${props.background})`};
  background-color: #333;
  background-size: cover;
  background-repeat: no-repeat;
  transform: translateX(-100px) rotateY(270deg);
`;

export default Left;