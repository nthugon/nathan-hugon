import styled from 'styled-components';

const TextArea = styled.textarea`
  display: block;
  margin: 0 auto;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid #377771;
  border-radius: 15px;
  width: 60%;
  height: 100px;
  font-size: 1.2rem;

  :focus {
    border-radius: 15px;               
    outline: none;
    box-shadow: inset 0 0 5px 1px #377771;
  }
`;

export default TextArea;