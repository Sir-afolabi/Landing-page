import image1 from "../assets/images/Rectangle 6.png";
import image2 from "../assets/images/Frame 9.png";
import image3 from "../assets/images/Frame 8.png";
import image4 from "../assets/images/slide-numbers.png";
import image5 from "../assets/images/Rectangle 8.png";
import image6 from "../assets/images/Rectangle 10.png";
import image7 from "../assets/images/Rectangle 9.png";
import image8 from "../assets/images/Frame 11.png";
import image9 from "../assets/images/Rectangle 17.png";
import image10 from "../assets/images/image 15.png";
import image11 from "../assets/images/image 16.png";
import image12 from "../assets/images/image 17.png";
import image13 from "../assets/images/image 18.png";
import image14 from "../assets/images/Group 12.png";
import image15 from "../assets/images/image 12.png";

export default function Home() {
  const backgroundImageStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <main className="container">
      <section className="section-1">
        <div className="viewProject">
          <div className="viewProject-text">
            <div className="first-text">
              <h1>Project</h1>
              <span className="section1-header">Lorum</span>
            </div>
            <div className="viewProject-arrow">
              <img src={image2} alt="project-img" className="left-arrow" />
              <img src={image3} alt="project-img" className="right-arrow" />
            </div>
            <img src={image4} alt="project-img" className="arrow-img" />
          </div>
        </div>
        <div className="viewProject-image">
          <img src={image1} alt="project-img" />
        </div>
      </section>
      <section className="section-2-container">
        <div className="section-2">
          <div className="stacked-images">
            <div className="image-1">
              <img src={image5} alt="image5" />
            </div>
            <div className="image-2">
              <img src={image6} alt="image6" />
            </div>
          </div>
          <div className="right-content">
            <div className="image-3">
              <img src={image7} alt="image7" />
            </div>
            <div className="right-text">
              <h1 className="about-heading-text">About</h1>
              <p className="about-paragraph-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos voluptates voluptas in necessitatibus accusantium ab
                perferendis possimus magni nulla nihil amet dolores expedita
                inventore consequatur, recusandae eius illo, nesciunt soluta.
              </p>
              <img src={image8} alt="image8" className="about-btn" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <h1 className="section3-h1">Main Focus/Mission Statement</h1>
        <div className="mission">
          <div className="mission-flex">
            <p className="mission-number">1</p>
            <p className="mission-paragraph-text-one">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              quia qui tempore optio ipsum quae beatae excepturi tempora
              laudantium
            </p>
          </div>
          <div className="mission-flex">
            <p className="mission-number">2</p>
            <p className="mission-paragraph-text-two">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              quia qui tempore optio ipsum quae beatae excepturi tempora
              laudantium, enim unde, inventore necessitatibus, quia qui tempore
            </p>
          </div>
        </div>
      </section>

      <section className="section4-container">
        <h1 className="sect-4-header">Our Projects</h1>
        <div className="row-1">
          <div
            className="image-div"
            style={{
              ...backgroundImageStyle,
              backgroundImage: `url(${image9})`,
            }}
          >
            <div className="image-overlay">
              <h2 className="overlay-text">
                <span>
                  Sample <br></br>Project
                </span>
              </h2>
              <img src={image14} alt="image8" />
            </div>
          </div>
          <div
            className="image-div"
            style={{
              ...backgroundImageStyle,
              backgroundImage: `url(${image10})`,
            }}
          ></div>
        </div>

        <div className="row-2">
          <div
            className="image-div"
            style={{
              ...backgroundImageStyle,
              backgroundImage: `url(${image11})`,
            }}
          ></div>
          <div
            className="image-div"
            style={{
              ...backgroundImageStyle,
              backgroundImage: `url(${image12})`,
            }}
          ></div>
          <div
            className="image-div"
            style={{
              ...backgroundImageStyle,
              backgroundImage: `url(${image13})`,
            }}
          ></div>
        </div>
        <img src={image8} alt="image8" className="img-btn-section4" />
      </section>
      <section className="section5-container">
        <h1>Contact Us</h1>
        <div className="section5">
          <div className="input-elements">
            <input type="text" placeholder="Name" className="section5-form" />
            <input
              type="text"
              placeholder="Phone Number"
              className="section5-form"
            />
            <input type="text" placeholder="E-mail" className="section5-form" />
            <input
              type="text"
              placeholder="Interested In"
              className="section5-form"
            />
            <textarea
              type="textarea"
              placeholder="Message"
              className="section5-form"
              cols={33}
              rows={8}
            ></textarea>
          </div>
          <div className="section5-img">
            <img src={image15} alt="image-12" />
          </div>
        </div>
        <img src={image8} alt="image-16" />
      </section>
    </main>
  );
}
