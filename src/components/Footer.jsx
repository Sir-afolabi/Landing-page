import logo1 from "../assets/images/Group 11.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import linkdin from "../assets/images/Linked In.png";
import pinterest from "../assets/images/pininterest.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo1} alt="" />
      </div>
      <div className="info-contact">
        <div className="contact-info">
          <h3>Information</h3>
          <p>Main</p>
          <p>Gallery</p>
          <p>Projects</p>
          <p>Certifications</p>
          <p>Contacts</p>
        </div>
        <div className="contact-info">
          <h3>Contacts</h3>
          <span className="span-sec5">
            {/* <img src="" alt="" /> */}
            <p>
              1234 Sample Street
              <br /> Austin Texas 78704
            </p>
          </span>
          <span>
            {/* <img src="" alt="" /> */}
            <p>512-333-2222</p>
          </span>
          <span>
            {/* <img src="" alt="" /> */}
            <p>sampleemailemail@gmail.com</p>
          </span>
        </div>
      </div>
      <div className="footer-socials">
        <h3>Social Media</h3>
        <span className="social-media-logo">
          <img src={facebook} alt="facebook-img" />
          <img src={twitter} alt="twitter-img" />
          <img src={linkdin} alt="linkin-img" />
          <img src={pinterest} alt="pininterest-img" />
        </span>
      </div>
    </footer>
  );
}
