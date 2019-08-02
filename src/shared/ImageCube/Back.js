import styled from 'styled-components';

const Back = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-image: ${props => `url(${props.background})`};
  background-color: #333;
  background-size: cover;
  background-repeat: no-repeat;
  transform: translateZ(-100px) rotateX(180deg);
`;

export default Back;