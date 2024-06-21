import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
    margin-top: 70px;
  }
`;

const Title = styled.div`
  font-size: 55px;
  text-align: center;
  font-weight: 600;
  margin-top: 60px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 2px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.text_primary};
  text-align: center; /* Added text-align center */
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 14px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 19px;
  font-weight: 600;
  cursor: pointer;
`;

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_j9pqt9j',
        'template_094jadd',
        form.current,
        'sNcyHyFXMGQiuPf3b',
      )
      .then(
        (result) => {
          alert("Thank You! Message Sent Successfully");
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          alert("Something Went wrong! Please try again.");
        }
      );
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <Title>Contact Me</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Fill out the Form below 🚀</ContactTitle>
          <ContactInput type="text" placeholder="Name" name="from_name" required />
          <ContactInput type="email" placeholder="Email" name="from_email" required />
          <ContactInput type="text" placeholder="Subject" name="subject" required />
          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows={7}
            required
            style={{ resize: "none" }}
          /><br/>
          <ContactButton type="submit" value="Send Message 🚀" className="cursor-pointer" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
