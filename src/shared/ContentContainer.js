import styled from 'styled-components';

const ContentContainer = styled.div`
  background-image: ${props => `url(${props.background})`};
`;

export default ContentContainer;