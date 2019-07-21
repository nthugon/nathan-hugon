import styled from 'styled-components';

const Input = styled.input`
  display: block;
  margin: 0 auto;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid #377771;
  border-radius: 15px;
  text-align: center;
  width: 50%;
  font-size: 1.2rem;

  :focus {
    border-radius: 15px;               
    outline: none;
    box-shadow: inset 0 0 5px 1px #377771;
  }
`;

export default Input;