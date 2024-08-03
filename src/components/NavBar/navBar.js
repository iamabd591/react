import React, { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/", text: "About" },
    { href: "/", text: "Contact" },
    { href: "/", text: "Agents" },
  ];

  const authLinks = [
    { href: "/", text: "Sign in", className: "signin" },
    { href: "/", text: "Sign up", className: "register" },
  ];

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>RealEState</span>
        </a>
        {navLinks.map((link, index) => (
          <a key={index} href={link.href}>
            {link.text}
          </a>
        ))}
      </div>
      <div className="right">
        {authLinks.map((link, index) => (
          <a key={index} href={link.href} className={link.className}>
            {link.text}
          </a>
        ))}
        <div className="menuIcon" onClick={toggleMenu}>
          <img src="/hamburger.png" alt="hamburger menu" />
        </div>
        <div className={open ? "menu active" : "menu"}>
          {navLinks.concat(authLinks).map((link, index) => (
            <a key={index} href={link.href}>
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
