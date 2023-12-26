import React, { useEffect } from 'react';
import './footer.css'; // Replace with your actual CSS file name
import { ReactComponent as GitHub } from "./assets/github.svg";
import { ReactComponent as YouTube } from "./assets/youtube.svg";
import { ReactComponent as Linkedin } from "./assets/linkedin.svg";
import { ReactComponent as Instagram } from "./assets/instagram.svg";
import { ReactComponent as Twitter } from "./assets/twitter.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { Link } from 'react-router-dom'; // Import Link

const Footer = () => {
  useEffect(() => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  }, []);

  return (
    <>
      <footer>
        <div className="footer-line"></div>
        <div className="footer-wrapper">
          <section className="footer-top">
            <div className="footer-headline">
              <h2>Sign up to our newsletter</h2>
              <p>Stay up to date with our news and articles</p>
            </div>
            <div className="footer-subscribe">
              <input type="email" spellCheck="false" placeholder="Your Email" />
              <button>Sign Up</button>
            </div>
          </section>
          <div className="footer-columns">
            <section className="footer-logo">
              <Logo className="logo" />
              <h2 className="hide">Ticketize</h2>
            </section>
            <section>
              <h3>Product</h3>
              <ul>
                <li><Link to="#" title="API">API</Link></li>
                <li><Link to="#" title="Pricing">Pricing</Link></li>
                <li><Link to="#" title="Documentation">Documentation</Link></li>
                <li><Link to="#" title="Release Notes">Release Notes</Link></li>
                <li><Link to="#" title="Status">Status</Link></li>
              </ul>
            </section>
            <section>
              <h3>Resources</h3>
              <ul>
                <li><Link to="#" title="Support">Support</Link></li>
                <li><Link to="#" title="Sitemap">Sitemap</Link></li>
                <li><Link to="#" title="Newsletter">Newsletter</Link></li>
                <li><Link to="#" title="Help Centre">Help Centre</Link></li>
                <li><Link to="#" title="Investor">Investor</Link></li>
              </ul>
            </section>
            <section>
              <h3>Company</h3>
              <ul>
                <li><Link to="#" title="About Us">About Us</Link></li>
                <li><Link to="#" title="Blog">Blog</Link></li>
                <li><Link to="#" title="Careers">Careers</Link></li>
                <li><Link to="#" title="Press">Press</Link></li>
                <li><Link to="#" title="Contact">Contact</Link></li>
              </ul>
            </section>
            <section>
              <h3>Legal</h3>
              <ul>
                <li><Link to="#" title="Terms and services">Terms</Link></li>
                <li><Link to="#" title="Privacy Policy">Privacy</Link></li>
                <li><Link to="#" title="Cookies">Cookies</Link></li>
                <li><Link to="#" title="Licenses">Licenses</Link></li>
                <li><Link to="#" title="Cookies">Contact</Link></li>
              </ul>
            </section>
          </div>
          <div className="footer-bottom">
            <small>© My Company Ltd. <span id="year"></span>, All rights reserved</small>
            <span className='social-links'>
              <Link to="#" title="Instagram">
                <Instagram />
              </Link>
              <Link to="#" title="Linkedin">
                <Linkedin />
              </Link>
              <Link to="#" title="Twitter">
                <Twitter />
              </Link>
              <Link to="#" title="Youtube">
                <YouTube />
              </Link>
              <Link to="#" title="GitHub">
                <GitHub />
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
