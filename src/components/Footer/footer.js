import "./footer.scss";

const Footer = () => {
  const navlinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
    { href: "/signin", text: "Sign in" },
    { href: "/signup", text: "Sign Up" },
  ];

  const helplinks = [
    { href: "/faqs", text: "FAQs" },
    { href: "/support", text: "Support" },
    { href: "/discrimilar", text: "Discrimilar" },
    { href: "/privacy_policy", text: "Privacy Policy" },
    { href: "/term_&_condition", text: "Terms & Condition" },
  ];
  return (
    <div className="footerMain">
      <div className="footerInfo">
        <div className="footerImage">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="footertext">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="socialLinks">
            <div>
              <img src="/whatsapp.png" alt="soiclaMedia" />
            </div>
            <div>
              <img src="/facebook.png" alt="soiclaMedia" />
            </div>
            <div>
              <img src="/instagram.png" alt="soiclaMedia" />
            </div>
            <div>
              <img src="/linkedin.png" alt="soiclaMedia" />
            </div>
          </div>
        </div>
      </div>
      <div className="footerlinks">
        <h3>Help</h3>
        <nav>
          <div className="navlinks">
            {navlinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.text}
              </a>
            ))}
          </div>
          <div className="helplinks">
            {helplinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.text}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <div className="footercontact">
        <div className="textContact">
          <h3>Contact Info</h3>
          <ul>
            <div>
              <img src="/email.png" alt="email" />
              <p>realestate@.com.au</p>
            </div>

            <div>
              <img src="/back-in-time.png" alt="time" />
              <p>Mon - Fri 10 A.M to 6 P.M</p>
            </div>

            <div>
              <img src="/gps.png" alt="location" />
              <p>Sydney, NSW Australia</p>
            </div>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Footer;
