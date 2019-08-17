import styled from 'styled-components';

const ContentContainer = styled.div`
  background: ${props => `url(${props.background}) no-repeat center`};
  background-size: cover;
`;

export default ContentContainer;