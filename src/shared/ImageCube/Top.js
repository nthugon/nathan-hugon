import styled from 'styled-components';

const Top = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-image: ${props => `url(${props.background})`};
  background-color: #333;
  background-size: cover;
  background-repeat: no-repeat;
  transform: translateY(-100px) rotateX(90deg); 
`;

export default Top;