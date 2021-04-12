import "./Contact.css";
import PortfolioData from "../../PortfolioData";

const Footer = () => {
  const contact = PortfolioData.contact;
  const email = `mailto:${contact.email}`;
  return (
    <section data-testid="contact-section" className="contact">
      <div className="contact-container">
        <div className="contact-title">
          <div
            className="text-above-contact green"
            data-testid="contact-section-title"
          >
            04. Whats Next?
          </div>
          <div className="stay-connected">Stay Connected</div>
        </div>
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
