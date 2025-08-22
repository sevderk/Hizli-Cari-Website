import React, { useState } from "react";
import proderLogo from "../assets/proderlogo.gif";
import headerData from "../data/headerData";
import "../styles/header.css";

const Header = () => {
  const { contact, nav } = headerData;
  const [open, setOpen] = useState(false);

  return (
    <header className="hero-header" role="banner">
      <div className="header-container">
        <div className="logo-and-contact">
          <a href="#hero" aria-label="Ana sayfa">
            <img src={proderLogo} alt="Proder Logo" className="header-logo" />
          </a>

          <div className="contact-info">
            <a href={contact.phoneHref}>{contact.phoneText}</a>
            <span className="sep">|</span>
            <a href={contact.emailHref}>{contact.emailText}</a>
          </div>
        </div>

        <nav className="nav-links" aria-label="Birincil">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="mobile-menu-button"
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
          aria-controls="mobile-panel"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`bar ${open ? "x1" : ""}`} />
          <span className={`bar ${open ? "x2" : ""}`} />
          <span className={`bar ${open ? "x3" : ""}`} />
        </button>
      </div>

      <div id="mobile-panel" className={`mobile-panel ${open ? "open" : ""}`}>
        <div className="mobile-contact">
          <a href={contact.phoneHref}>{contact.phoneText}</a>
          <span className="sep">|</span>
          <a href={contact.emailHref}>{contact.emailText}</a>
        </div>

        <nav className="mobile-nav" aria-label="Mobil">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
