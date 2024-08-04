import "./footer.scss";

const Footer = () => {
  const navlinks = [
    { href: "/", text: "FAQs" },
    { href: "/", text: "Home" },
    { href: "/", text: "About" },
    { href: "/", text: "Contact" },
    { href: "/", text: "Support" },
    { href: "/", text: "Sign in" },
    { href: "/", text: "Sign Up" },
    { href: "/", text: "Privacy Policy" },
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
            ever since the 1500s
          </p>
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
        </nav>
      </div>
      <div className="footercontact">
        <div className="textContact">
          <ul>
            <div>
              <img src="/email.png" alt="email" />
              <p>realestate@.com.au</p>
            </div>

            <div>
              <img src="/back-in-time.png" alt="time" />
              <p>Mon - Fri 10 to 6</p>
            </div>

            <div>
              <img src="/gps.png" alt="location" />
              <p>Sydney, NSW AUstralia</p>
            </div>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Footer;
