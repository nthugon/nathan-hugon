import styled from 'styled-components';

const Container = styled.div`
  /* background: url('/img/your-image.png') no-repeat center -15px; */
  background-size: cover;
  min-height: 600px;

  @media (min-width: 350px) {
    min-height: 700px;
  }

  @media (min-width: 768px) {
    width: 75%;
    margin: 0 auto;
    min-height: 1200px;
  }
`;

export default Container;