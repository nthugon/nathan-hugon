import styled from 'styled-components';

const Text = styled.p`
  font-size: 1.4rem;                
  text-align: center;
  color: #e75a7c;

  @media (min-width: 350px) {
    font-size: 1.6rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export default Text;