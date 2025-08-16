import React from 'react';
import '../styles/footer.css';
import colors from '../styles/colors';

import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaEnvelope
} from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

import payment from '../assets/icons/payment-footer.png';
import footerData from '../data/footerData';

const ICONS = { in: <FaLinkedinIn />, fb: <FaFacebookF />, x: <FaXTwitter />, yt: <FaYoutube /> };

const Footer = () => {
  const { contact, social, customersLinks, newsLinks, campaigns } = footerData;

  return (
    <footer
      className="ft"
      id="footer"
      style={{
        '--primary': colors.primary,
        '--white': colors.white
      }}
    >
      <div className="ft-wrap">
        <div className="ft-col">
          <h4 className="ft-h">Sizi Arayalım</h4>
          <p className="ft-text">
            Bizimle irtibat için{' '}
            <a
              href="https://www.proder.com.tr/contact"
              className="ft-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              iletişim
            </a>{' '}
            sayfamızı ya da{' '}
            <a
              href="https://www.proder.com.tr/offer"
              className="ft-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              demo talep
            </a>{' '}
            formumuzu ziyaret edebilirsiniz.
          </p>

          <div className="ft-social">
            {social.map((s) => (
              <a
                key={s.key}
                aria-label={s.label}
                href={s.href}
                className="ft-social-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ICONS[s.key]}
              </a>
            ))}
          </div>
        </div>

        <div className="ft-col">
          <h4 className="ft-h">Müşterilerimiz</h4>
          <ul className="ft-list">
            {customersLinks.map((l, i) => (
              <li key={i}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ft-col">
          <h4 className="ft-h">Bizden Haberler</h4>
          <ul className="ft-list">
            {newsLinks.map((l, i) => (
              <li key={i}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ft-col">
          <h4 className="ft-h">Kampanyalar</h4>
          <ul className="ft-list">
            {campaigns.map((l, i) => (
              <li key={i}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ft-col">
          <h4 className="ft-h">İletişime Geçin</h4>
          <ul className="ft-contact">
            <li>
              <FaPhoneAlt className="ft-ico" />
              <a href={contact.phoneHref} target="_blank" rel="noopener noreferrer">
                {contact.phone}
              </a>
            </li>
            <li>
              <FaEnvelope className="ft-ico" />
              <a href={contact.emailHref} target="_blank" rel="noopener noreferrer">
                {contact.email}
              </a>
            </li>
            <li>
              <FaLocationDot className="ft-ico" />
              <span>{contact.address}</span>
            </li>
          </ul>

          <div className="ft-badges">
            <img src={payment} alt="Ödeme Yöntemleri" className="payment-icon" />
          </div>
        </div>
      </div>

      <div className="ft-bottom" style={{ backgroundColor: colors.graylight || '#f5f7fb' }}>
        <div className="ft-bottom-wrap">
          <p>© {new Date().getFullYear()} PRODER. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
