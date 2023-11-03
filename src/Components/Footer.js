import React, { useState, useEffect } from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file
import CollapsibleMenu from './CollapsibleMenu';

const Footer = () => {

  const isSmallScreen = () => window.innerWidth < 950;
  const [smallScreen, setSmallScreen] = useState(isSmallScreen());
  const [emailValue, setEmailValue] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(isSmallScreen());
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      {smallScreen ? (
        <footer className="footerW">
          
        <div className="columnF">
          <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="Company Logo" className="logo" id='lgr' />
        </div>
        <div className="columnF">
          <div className="heading">
          <b>BECOME AN ETHOS INSIDER</b>
          <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          </div>
          <div className={`email-input ${emailFocused ? 'focused' : ''}`}>
            <input
              type="text"
              value={emailValue}
              onChange={handleEmailChange}
              onFocus={handleEmailFocus}
              onBlur={() => setEmailFocused(false)}
            />
            <label>Your e-mail</label>
          </div>
          <div className='wrap'>
            <div className="social-icons">
            <img src={process.env.PUBLIC_URL + '/assets/facebook.png'} className="facebook" alt="facebook"/>
            
            <img src={process.env.PUBLIC_URL + '/assets/instagram.png'} className="instagram"  alt="instagram"/>
            
            <img src={process.env.PUBLIC_URL + '/assets/youtube.png'} className="youtube"  alt="youtube"/>
            </div>
          </div>
        </div>

        <div className='CollapseMenu'>
        <div className="CollapseHeader1">
        <CollapsibleMenu
        title="QUICK LINKS"
        items={['Shop', 'Wholesale', 'Rewards', 'Contact']}
        className="quick-links-menu" // Add unique classname
        />
        </div>
        <div className="CollapseHeader2">
        <CollapsibleMenu
        title="POLICIES"
        items={['Money-Back Guarantee', 'Shipping & Returns', 'Terms of Service', 'Privacy Policy']}
        className="policies-menu" // Add unique classname
        />
        </div>
        <div className="CollapseHeader1">
        <CollapsibleMenu
        title="COMPANY"
        items={['Blog', 'Order Lookup', 'Car Detailers Near Me', 'Affiliate Program', 'SDS']}
        className="company-menu" // Add unique classname
        />
        </div>
        </div>

        <div className="credits">
        <span>&#169;</span> {new Date().getFullYear()} Sparkles
        </div>
        </footer>
      ) : (
        <footer className="footerW">
          
        <div className="columnF">
          <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="Company Logo" className="logo" />
        </div>
        <div className="columnF">
          <div className="heading">
          <b>BECOME AN ETHOS INSIDER</b>
          <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          </div>
          <div className={`email-input ${emailFocused ? 'focused' : ''}`}>
            <input
              type="text"
              value={emailValue}
              onChange={handleEmailChange}
              onFocus={handleEmailFocus}
              onBlur={() => setEmailFocused(false)}
            />
            <label>Your e-mail</label>
          </div>
          <div className='wrap'>
            <div className="social-icons">
            <img src={process.env.PUBLIC_URL + '/assets/facebook.png'} className="facebook" alt="facebook"/>
            
            <img src={process.env.PUBLIC_URL + '/assets/instagram.png'} className="instagram"  alt="instagram"/>
            
            <img src={process.env.PUBLIC_URL + '/assets/youtube.png'} className="youtube"  alt="youtube"/>

            <img src={process.env.PUBLIC_URL + '/assets/Linkedin.png'} className="linkedin"  alt="linkedin"/>

            <img src={process.env.PUBLIC_URL + '/assets/tiktok.png'} className="tiktok"  alt="tiktok"/>
            </div>
          </div>
        </div>
        <div className="columnF">
        <div className="heading">
        <b>QUICK LINKS</b>
        </div>
          <ul className="quick-links">
            <li>Shop</li>
            <li>Wholesale</li>
            <li>Rewards</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="columnF">
        <div className="heading">
        <b>POLICIES</b>
        </div>
          <ul className="quick-links">
            <li>Money-Back Guarantee</li>
            <li>Shipping & Returns</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="columnF">
        <div className="heading">
        <b>COMPANY</b>
        </div>
          <ul className="quick-links">
            <li>Blog</li>
            <li>Order Lookup</li>
            <li>Car Detailers Near Me</li>
            <li>Affiliate Program</li>
            <li>SDS</li>
          </ul>
        </div>
      </footer>
      )}
    </>
  );
};

export default Footer;
