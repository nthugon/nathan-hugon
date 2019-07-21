import styled from 'styled-components';
import Label from './Label';
import Input from './Input';
import TextArea from './TextArea';
import Submit from './Submit';

const ContactForm = styled.form`
  display: block;
  margin: 10% auto; 
  width: 80%;
  font-size: 1.4rem;
  border: 2px solid;
  border-radius: 15px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  @media (min-width: 768px) {
    margin: 5% auto;
    width: 40%;
    font-size: 1.8rem;
  }

  @media (min-width: 1000px) {
    width: 30%;
  }
`;

ContactForm.Label = Label;
ContactForm.Input = Input;
ContactForm.TextArea = TextArea;
ContactForm.Submit = Submit;

export default ContactForm;