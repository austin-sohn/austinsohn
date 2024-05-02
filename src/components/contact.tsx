import React, { useRef } from "react";
import {
  ContactStyle,
  FormStyle,
  InputStyle,
  TextAreaStyle,
} from "../styles/contact.style";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../resources/theme";

export const Contact = () => {
  const formRef = useRef(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentForm = formRef.current;
    if (currentForm == null) return;
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        currentForm,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          console.log("passed" + result.text);
        },
        (error) => {
          console.log("failed " + error.text);
        }
      );
    const resetForm = e.target as HTMLFormElement;
    resetForm.reset();
  };
  return (
    <ThemeProvider theme={theme}>
      <ContactStyle id="Contact">
        <h2>Contact Me</h2>
        <FormStyle ref={formRef} onSubmit={sendEmail}>
          <InputStyle placeholder="Name" type="text" name="user_name" />
          <InputStyle placeholder="Email" type="email" name="user_email" />
          <TextAreaStyle
            placeholder="Message"
            rows={5}
            cols={40}
            name="message"
          />
          <Button
            variant="outlined"
            endIcon={<SendIcon />}
            type="submit"
            color="white"
          >
            Send
          </Button>
        </FormStyle>
      </ContactStyle>
    </ThemeProvider>
  );
};

export default Contact;
