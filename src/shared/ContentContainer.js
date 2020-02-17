import styled from 'styled-components';

const ContentContainer = styled.div`
  padding: 2rem 0 4rem 0;
  background: ${props => `url(${props.background}) no-repeat center`};
  background-size: cover;

  @media (min-width: 1366px) {
    margin-top: 5rem;
  }
`;

export default ContentContainer;