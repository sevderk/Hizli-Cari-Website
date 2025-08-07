import React from 'react';
import '../styles/footer.css';
import colors from '../styles/colors';
import footerData from '../data/footerData';

const Footer = () => {
  return (
    <footer className="footer" id="footer" style={{ backgroundColor: colors.darkblue, color: colors.white }}>
      <div className="footer-content">

        <div className="footer-section">
          <h3 style={{ color: colors.primary }}>{footerData.contact.title}</h3>
          <p>Telefon: <a href={`tel:${footerData.contact.phone}`} style={{ color: colors.accent }}>{footerData.contact.phone}</a></p>
          <p>E-posta: <a href={`mailto:${footerData.contact.email}`} style={{ color: colors.accent }}>{footerData.contact.email}</a></p>
        </div>

        <div className="footer-section">
          <h3 style={{ color: colors.primary }}>{footerData.developer.title}</h3>
          <p>{footerData.developer.company}</p>
          {footerData.developer.addressLines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
          <p>Tel: <a href={`tel:${footerData.developer.phone}`} style={{ color: colors.accent }}>{footerData.developer.phone}</a></p>
        </div>

        <div className="footer-section">
          <h3 style={{ color: colors.primary }}>{footerData.links.title}</h3>
          <p><a href={footerData.links.website.url} target="_blank" rel="noopener noreferrer" style={{ color: colors.accent }}>{footerData.links.website.label}</a></p>
          <p><a href={footerData.links.privacy.url} target="_blank" rel="noopener noreferrer" style={{ color: colors.accent }}>{footerData.links.privacy.label}</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Proder Yazılım. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
