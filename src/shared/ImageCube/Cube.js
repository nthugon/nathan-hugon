import styled from 'styled-components';

const Cube = styled.div`
  transform-style: preserve-3d;
  position: relative;
  width: 200px;
  height: 200px;
  animation: rotate 10s ease-in-out infinite;
  transform-origin: center center;

  @keyframes rotate {
    0% { transform: rotateX(0)}
    12.5% { transform: rotateY(90deg)}
    25% { transform: rotateY(270deg)}
    37.5% { transform: rotateY(270deg)}
    50% { transform: rotateY(360deg)}
    62.5% { transform: rotateX(90deg)}
    75% { transform: rotateX(180deg)}
    87.5% { transform: rotateX(270deg)}
    100% { transform: rotateX(360deg)}
  }

  &:hover {
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
  }
`;

export default Cube;