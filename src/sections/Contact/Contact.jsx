import Section from "../../components/Section/Section";
import './Contact.scss';

function Contact() {
  return (
    <Section title="Contact Me" spacing={true} inverse={true}>
      <div className="contact">
        <img src="https://via.placeholder.com/1280x800.png" />
      </div>
    </Section>
  );
}

export default Contact;
