import "./Contact.css";
import PortfolioData from "../../PortfolioData";

const Footer = () => {
  const contact = PortfolioData.contact;
  const email = `mailto:${contact.email}`;
  return (
    <section data-testid="contact-section" className="contact">
      <div className="contact-container">
        <div className="text-above-contact" data-testid="contact-section-title">
          <span className="green">04. </span>Whats Next?
        </div>
        <div className="stay-connected">Stay Connected</div>
        <div className="contact-info" data-testid="contact-info">
          {contact.contactText}
        </div>

        <a className="contact-btn" data-testid="contact-btn" href={email}>
          <button className="inner-contact-button">Get in touch</button>
        </a>
      </div>
    </section>
  );
};

export default Footer;
