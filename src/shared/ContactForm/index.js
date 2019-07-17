import styled from 'styled-components';
import Label from './Label';
import Name from './Name';
import Email from './Email';
import Message from './Message';
import Submit from './Submit';

const ContactForm = styled.form`
  display: block;
`;

ContactForm.Label = Label;
ContactForm.Name = Name;
ContactForm.Email = Email;
ContactForm.Message = Message;
ContactForm.Submit = Submit;

export default ContactForm;