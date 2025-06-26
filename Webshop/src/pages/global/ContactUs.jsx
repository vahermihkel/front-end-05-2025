import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('', '', form.current, {
        publicKey: '',
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
        },
        (error) => {
          toast.error("Failed to send email.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br />
      <input type="text" name="from_name" required /><br />
      <label>Email</label><br />
      <input type="email" name="from_email" required /><br />
      <label>Message</label><br />
      <textarea name="message" required /><br />
      <input type="submit" value="Send" /><br />
    </form>
  );
};

export default ContactUs;
