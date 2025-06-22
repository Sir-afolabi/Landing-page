import contactImg from "../assets/images/Frame 0.png";
import contactImg2 from "../assets/images/image 14.png";

export default function Contacts() {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <div className="text-contact">
          <h1>Contact</h1>
          <h3 className="h1-span-contact">Information</h3>
        </div>
        <div className="contact-p">
          <h3>Company Name</h3>
          <p>1234 Sample Street Austin Texas 76401</p>
        </div>
        <h3>512.333.2222</h3>
        <p>sampleemail@gmail.com</p>
        <img src={contactImg} alt="contactImg" className="contactImg-contact" />
      </div>
      <img src={contactImg2} alt="contactImg2" className="contactImg2" />
    </div>
  );
}
