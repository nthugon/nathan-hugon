import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color:inherit;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
      color:inherit;
  }
`;

export default Link;